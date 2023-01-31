//Serve para fazer afirmações nos testes
const assert = require('assert');
//rede de test da ethereum
const ganache = require('ganache-cli');
//Web3 é uma biblioteca que permite a interação e criando instancia de funções Construtoras.
const Web3 = require('web3');

//Instancia do Web3
const web3 = new Web3(ganache.provider());
