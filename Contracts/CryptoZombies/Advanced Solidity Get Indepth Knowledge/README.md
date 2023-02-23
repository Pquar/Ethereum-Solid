# Liçoes aprendidas
Teste seus contratos inteligentes com TrufflecontraGanache
Use Chaipara escrever afirmações mais expressivas
Teste contra Loom😉
install chai para escrever afirmações mais expressivas
```
npm -g install chai
```
## Truffle

maneira fácil de compilar contratos inteligentes
geração automática de ABI
teste integrado de contratos inteligentes - até mesmo suporte para Mocha e Chai!
suporte para várias networks 
```
npm install truffle -g 
```
truffle init. Este comando gera a estrutura de diretórios padrão para um projeto Truffle.
```
npm install truffle-hdwallet-provider.
```
Este pacote permite que você use uma frase mnemônica para desbloquear uma conta e assinar transações com ela.
```
truffle migrate --network rinkeby.
```
Comando para implantar seu contrato inteligente na rede Rinkeby.

## Implementar na rede loom
Com truffle, você pode implantar seu contrato inteligente na rede Loom usando o comando.
truffle migrate --network loom_testnet

## Manusear a Chave Privada
imports:
```javascript
const { readFileSync } = require('fs')
const path = require('path')
const { join } = require('path')
```
Um exemplo de como chamar a chave privada ja em uma função:

```javascript
function getLoomProviderWithPrivateKey (privateKeyPath, chainId, writeUrl, readUrl) {
  const privateKey = readFileSync(privateKeyPath, 'utf-8');
  return new LoomTruffleProvider(chainId, writeUrl, readUrl, privateKey);
}
```

# Funcionamento de um Contrato com oraculo

[[https://cryptozombies.io/course/static/image/lesson-14/EthPriceOracleOverview.png|alt=img]]

instalação dos pacote de oráculo
```
npm init -y
npm i truffle openzeppelin-solidity loom-js loom-truffle-provider bn.js axios.
```
