export class Pessoa {
    static ultimaId = 0 //vai ir numerando os IDs de acordo com a sua inserção
    constructor  (nome, email ) {
        this.id = Pessoa.ultimaId++;
        this.nome = nome;
        this.email = email;
    }
            caminha () { console.log("caminhou")
            ; }

            static isPessoa (item) {
                return item instanceof Pessoa
            }
    
}

const romeu = new Pessoa ("Romeu", "a@b.com")
const isaac = new Pessoa ("Isaac", "b@a.com")

console.log(romeu);
console.log(romeu.nome);
console.log(isaac);
console.log(isaac.nome); 
romeu.caminha();
console.log(Pessoa.isPessoa(romeu));
