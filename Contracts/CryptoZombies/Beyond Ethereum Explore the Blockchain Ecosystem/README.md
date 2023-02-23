# zkSync

O zkSync é construído na arquitetura de rollup ZK, uma solução de escalonamento de nível dois em que todos os fundos são mantidos por um contrato inteligente no Ethereum, enquanto a computação e o armazenamento são executados fora da cadeia.
- O protocolo permite transferências de token ETH e ERC20 com confirmações instantâneas e finalização de 10 minutos no Ethereum.
- Fornece segurança no nível da rede principal com dependência zero de terceiros .
- Baixas taxas de transação
- Depósitos e levantamentos rápidos

Os usuários podem enviar seus tokens ETH ou ERC20 para o contrato inteligente zkSync no Ethereum, e o protocolo os creditará com os ativos equivalentes.

## Aprendizados
Configurar contas no zkSync
Deposite ETH no zkSync
Faça pagamentos transferindo ETH entre contas zkSync
Acompanhe o status dessas transações.
Retirar ETH para Ethereum


## Start
```	
npm init -y
npm install ethers zksync
```
## Realizado
Foi criado um aplicativo que pode depositar, transferir e sacar vários ativos. os quais pode fazer pagamentos usando ETH novamente, basta definir o valor da token variável de volta para ETH, e então atualizar as variáveis amountToDeposit​​, amountToTransfere de acordo.amountToWithdraw.