# Request Struct

| Name | Type | Purpose |
| :---: | :---: | :---: |
| description | string | descreve oque esta sendo a requisição que esta sendo solicitada |
| amount | unit | valor da requisição que o manager que enviar para o fornecedor |
| recipient | address | endereço do fornecedor que vai receber os tokens |
| complete | bool | se a requisição foi completada ou não |
| approvals | mapping | Acha quem ja votou |
| approvalCount | uint | quantidade de votos que a requisição recebeu |

# Variables
| Name | Type | Purpose |
| :---: | :---: | :---: |
| manager | address | endereço do manager |
| minimumContribution | uint | valor mínimo para contribuir |
| approvers | mapping | Acha quem ja contribuiu |
| requests | Request[] | array de requisições |

# Functions
| função | Descrição |
| :---: | :---: |
| Campaign | Construtor da campanha e seta o minimumContribution e o dono do contrato=manager|
| contribute | Função para contribuir com a campanha |
| createRequest | Função para criar uma requisição |
| approveRequest | Função para aprovar uma requisição |
| finalizeRequest | Função para finalizar uma requisição |

# Storage and Memory

| storage | memory |
| :---: | :---: |
| Mantém dados entre chamadas de função| Local temporário para armazenar dados |
| Memoria de armazenamento| Memoria temporária|
|Memoria de "disco"|Memoria RAM |

# Mapping vs Array
| Array | Mapping|
|--- | ---|
|Pesquisa por tempo linear | Pesquisa de tempo "constante" |
|Maiores os dados maior o tempo para executar uma pesquisa | Leva exatamente o mesmo tempo para executar uma pesquisa|