import Funcionario from './Funcionario.mjs'

console.log('Exercício 1 da Semana 5!');


const Ivie = new Funcionario("10970162693", 'Ivie Meireles Pedra', 1500);

console.log(Ivie);
console.log(`Salário atual: ${Ivie.salario}`); // 1500
Ivie.promover = 50; //Valor em % do aumento de salário
console.log(`Salário após promoção:${Ivie.salario}`); // salario novo + o valor anterior