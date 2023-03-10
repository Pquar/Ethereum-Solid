//Serve para fazer afirmações nos testes
const assert = require('assert');
//rede de test da ethereum
const ganache = require('ganache-cli');
//Web3 é uma biblioteca que permite a interação e criando instancia de funções Construtoras.
const Web3 = require('web3');

//Instancia do Web3
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!';

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
    //Verifica se o contrato foi criado [função ok verifica se o valor é definido]
    assert.ok(inbox.options.address);
  });
  it('has a default message', async () => {
    //Verifica se a mensagem é igual a inicial
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });

  it('can change the message', async () => {
    //Verifica se a mensagem é igual a a mensagem que foi modificada
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});
