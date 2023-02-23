# TronBox
Plataforma de desenvolvimento de contratos inteligentes que permite testar, compilar e implantar seus contratos inteligentes na rede TRON:
- Fácil compilação de contratos inteligentes
- Geração automatizada de ABI
- Teste de contrato inteligente integrado
- Suporte para várias redes
# TronWeb
Desenvolvimento continuo influenciada pelo Web3 da Ethereum.

# instalação
Node.js instalado
Instale o TronBox e o TronWeb e os disponibilize globalmente.
```bash
mkdir CryptoZombies-TRON && cd CryptoZombies-TRON
npm install -g tronbox
npm install -g tronweb
tronbox init
tree //certifique-se de que o diretório foi criado
```

# Configuração
para atualizar o contrato precisamor mudar os arquivos de configuração onde usamos ETH para TRON(trx)

# Configuração do TronBox
```bash
tronbox compile  //compila o contrato
 node scripts/generate-private-key.js //gera uma chave privada
 tronbox migrate --reset --network shasta //migra o contrato para a rede shasta
 tronbox migrate --network mainnet //migra o contrato para a rede mainnet
```
