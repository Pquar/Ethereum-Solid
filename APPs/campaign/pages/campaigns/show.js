import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';

class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimunContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimunContribution,
      requestsCount,
      approversCount,
    } = this.props;

    const items = [
      {
        header: this.props.manager,
        meta: 'Endereço do Manager',
        description:
          'O manager criou esta campanha e pode fazer requests para retirar o dinheiro da campanha',
        style: { overflowWrap: 'break-word' },
      },
      {
        header: this.props.minimunContribution,
        meta: 'Mínimo de Contribuição (wei)',
        description:
          'Valor mínimo em wei, para se tornar um Contribuidor com direito a ser um aprovador de requests ',
      },
      {
        header: this.props.requestsCount,
        meta: 'Numero de Requests',
        description:
          'Requets podem retirar dinheiro do contrato. Requests devem ser aprovadas pelos contribuintes com direito a voto',
      },
      {
        header: this.props.approversCount,
        meta: 'Numero de Aprovadores',
        description:
          'Numero de pessoas que podem votar e doaram para esta campanha',
      },
      {
        header: web3.utils.fromWei(this.props.balance, 'ether'),
        meta: 'Dinheiro da Campanha (ether)',
        description: 'O quanto de dinheiro a campanha possui para gastar',
      },
    ];

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <h3>Dados da Campaign</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.address}/requests`}>
                <a>
                  <Button primary>Ver Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
