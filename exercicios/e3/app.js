import Personagem from "./Personagem.mjs"

console.log('Exercício 3 da Semana 5!');

const retundao = new Personagem ("Retundao");

console.log(`Sua vida atual é: ${retundao.vida}`);

retundao.sofreuDano (50);

console.log(`Sua vida atual agora é: ${retundao.vida}`);


retundao.usouKitMedico();

console.log(`Após usar o Kit Médico sua vida agora é ${retundao.vida}`);