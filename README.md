# APRENDENDO SOBRE ETHEREUM E SOLIDITY
Funcionamento de uma transação na rede Ethereum

| item     |  Função                               |
|--        |--                                     |
|nonce     | Quantas vezes foi enviado a transação |
| to       | Para quem foi enviado a transação     |
| data     | compila os bytecode dos contratos     |
| value    | Valor da transação                    |
| gasPrice | Preço do gás da transação             |
| gasLimit | Limite de gás da transação            |
| gasStart | Gás inicial da transação              |
| v , r, s | Valores de assinatura da transação    |

## Criando o primeiro contrato

Editor de Código que iremos utilizar sera o [Remix](https://remix.ethereum.org/)
Seguremos os seguintes passos para criar o nosso primeiro contrato:
- 1.1  Abir o site do remix
- 1.2  O site criara um novo arquivo
- 1.3 Entrar no arquivo Ballot.sol e deletar todo o conteúdo

Neste processo de aprendizado foi usado a versão 0.4.17 do compilador do solidity e usaremos a função auto complete para facilitar o aprendizado.

### tipos comuns de Funções 

| Função | Descrição |
|--      |--         |
| public | Função que pode ser chamada por qualquer um |
| private | Função que só pode ser chamada so por este contrato |
| view | Função que retorna a data e não altera o estado do contrato |
| constant |  Função que retorna a data e não altera o estado do contrato |
| pure | Função que não altera o estado do contrato e não retorna dados |
| payable | Função que pode enviar ether |

>**Notas**: Public e Private podem ser usadas uma por função, 
 **View e constant** fazer a mesma coisa, view para documentação e constant, sendo que view e mais recente que constant.

### Executando funções de contratos

| Função | Descrição |

| 'Calling' a Function | Enviar uma transação para a função |
|--      |--         |
| Não modifica os dados do contrato| Pode modificar o estado do contrato| 
| Pode retornar os dados | Leva um tempo para executar |
|  Retorna Instantaneamente | Retorna o hash da transação|
| Gratis para fazer | Custa dinheiro (GAS) |

### GAS

Gas e o combustível da rede Ethereum, é usado para executar as funções dos contratos e para armazenar os dados. O gas é pago em ether, e o preço do gas e definido pela rede. A unidade de gas e o gwei ou wei que são unidades de medidas do ether.

| gasPrice| Montante a ser pago pela transação processada |
|--      |--         |
| startGas/gasLimit | Quantidade limite de gas que a transação pode gastar, ou que voce esta disposto a gastar |

### Siglas

ABI: (Application Binary Interface), Lista todas as funções e variáveis ​​do contrato são listadas no ABI, que é usado para chamar as funções do contrato.

Bytecode: é o código binário do contrato, que é usado para implantar o contrato na rede Ethereum.

## WEb3

Atualmente existem duas versões do Web3.js, a versão 0.x.x e a versão 1.x.x A versão 1.x é a versão mais recente e é a versão que usaremos. 
A versão 0.x é a versão mais antiga e a que mais possui conteúdo sobre na internet e fóruns, possui um interface "primitiva" para trabalhar com chamadas de código async.
A versão 1.x é a versão mais recente e é a versão que usaremos, e tem suporte a promises + async/await. 
