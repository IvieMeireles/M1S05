import Juros from "./Juros.mjs";

const investimentoIvieSimples = new Juros (10000, 0.07, 24)
console.log(`Seu investimento de ${investimentoIvieSimples.capitalInicial} com uma taxa de ${investimentoIvieSimples.taxaAplicada} após ${investimentoIvieSimples.tempo} meses é de R$${investimentoIvieSimples.calcularJurosSimples()}`);

const investimentoIvieComposto = new Juros (10000, 0.07, 24)
console.log(`Seu investimento de ${investimentoIvieComposto.capitalInicial} com uma taxa de ${investimentoIvieComposto.taxaAplicada} após ${investimentoIvieComposto.tempo} meses é de R$${investimentoIvieComposto.calcularJurosCompostos()}`);



