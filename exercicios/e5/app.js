import CalculadoraDeArea from "./CalculadoraDeArea.mjs";

console.log("Exercício 5 da semana 5");

const quadA = new CalculadoraDeArea("quadrado", 6, 6);
const areaQA = quadA.calcular();
console.log(`A área do seu triângulo ${quadA.tipo} é de ${areaQA}`); // 6² = 36

const triangB = new CalculadoraDeArea("triangulo", 8, 7);
const areaTB = triangB.calcular();
console.log(`A área do seu triângulo ${triangB.tipo} é de ${areaTB}`); // (7 * 8) / 2 = 28