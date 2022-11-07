export default class Funcionario {
    #cpf
    nomeCompleto
    salario
    constructor(cpf, nomeCompleto, salario) {
        console.log('CONSTRUCTOR');
        this.#cpf = cpf
        this.nomeCompleto = nomeCompleto
        this.salario = salario
    }

   set promover (percentual) {
        console.log(percentual / 100);
        this.salario *= 1 +  percentual / 100
    }

}

const Ivie = new Funcionario("10970162693", 'Ivie Meireles Pedra', 1500);

console.log(Ivie);
console.log(`Salário atual: ${Ivie.salario}`); // 1500
Ivie.promover = 50; //Valor em % do aumento de salário
console.log(`Salário após promoção:${Ivie.salario}`); // salario novo + o valor anterior