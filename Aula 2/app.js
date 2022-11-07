import { Pessoa } from './pessoa.js';


const romeu = new Pessoa ("Romeu", "a@b.com")
const isaac = new Pessoa ("Isaac", "b@a.com")

console.log(romeu);
console.log(romeu.nome);
console.log(isaac);
console.log(isaac.nome); 
romeu.caminha();
console.log(Pessoa.isPessoa(romeu));
