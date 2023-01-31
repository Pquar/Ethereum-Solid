//Serve para fazer afirmações nos testes
const assert = require('assert');
//rede de test da ethereum
const ganache = require('ganache-cli');
//Web3 é uma biblioteca que permite a interação e criando instancia de funções Construtoras.
const Web3 = require('web3');

//Instancia do Web3
const web3 = new Web3(ganache.provider());

class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}
// Inicia a variável para que todos tenha acesso
let car;
//Cria o objeto para ser usado nos testes, e não precisa ser criado novamente em cada teste.
beforeEach(() => {
  car = new Car();
});

describe('Car Class', () => {
  //bloco de teste
  it('can park', () => {
    assert.equal(car.park(), 'stopped');
  });
  //bloco de teste
  it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
