import Fatura from './Fatura.mjs'

console.log('Exercício 2 da Semana 5!');

const batata = new Fatura (1, "Batata", 2, 10)

const valor = batata.obterValorTotal();

console.log(`O valor da compra é de ${valor} reais`);