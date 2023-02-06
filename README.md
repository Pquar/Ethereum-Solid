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

# Basic types

| Type | Description | Example |
|--    |--           |--       |
| string | sequencia de caracteres | "Hello World" |
| bool | true or false | true |
| int | inteiro | 1 -1 33412|
| uint | inteiro sem sinal (numero positivo) | 1 33412 3132 0|
| fixed/unfixed | numero com decimal | 1.2 2321.2103131 -10.2|
| address | endereço de uma conta | 0x1234567890123456789012345678901234567890 |
|

## Range of values
**INTER RANGER**
| Name | Lower Bound | Upper Bound |
|:--:    |:--:   |:--:  |
| int8 | -128 | 127 |
| int16 | -32768 | 32767 |
| int24 | -8388608 | 8388607 |
| int32 | -2147483648 | 2147483647 |
| int40 | -549755813888 | 549755813887 |
| int48 | -140737488355328 | 140737488355327 |
| int56 | -36028797018963968 | 36028797018963967 |
| int64 | -9223372036854775808 | 9223372036854775807 |
| ... | --- | ... | 
| int256 | -57896044618658097711785492504343953926634992332820282019728792003956564819968 | 57896044618658097711785492504343953926634992332820282019728792003956564819967 |
>obs: int == int256

**UNSIGNED INTER RANGER**

| Name | Lower Bound | Upper Bound |
|:--:    |:--:   |:--:  |
| uint8 | 0 | 255 |
| uint16 | 0 | 65535 |
| uint24 | 0 | 16777215 |
| uint32 | 0 | 4294967295 |
| ... | ... | ... |
| uint256 | 0 | 115792089237316195423570985008687907853269984665640564039457584007913129639935 |

>obs: uint == uint256

# MSG FUNCTIONS

| Function | Description |
|--        |--           |
| msg.data | Retorna os argumentos que estamos enviando  para  a função|
| msg.gas | Retorna o gas que temos disponível para a função |
| msg.sender | Retorna o endereço da conta que chamou a função |
| msg.value | Retorna o valor que foi enviado para a função |

# Reference Types

| nome | Descrição | Exemplo |
|--    |--         |--       |
| fixed array | array com tamanho fixo | uint[3] |
| dynamic array | array com tamanho dinamico | uint[] |
| mapping | mapeamento de dados (Representa varias coisas) | mapping (address => uint) public balances; |
| struct | estrutura de dados (Representa uma coisa) | struct Person { uint age; string name; } |
