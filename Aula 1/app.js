//array methods

// nomeArray.nomeFuncao(funcaoParametro)   
// lista.forEach (item => console.log(item));

// array static methods
//
// Array.nomefuncao(parametro) ou
// Array.isArray(nomeDoArray)

class Retangulo {
    constructor (b, a) { // o metodo constructor é utilizado quando queremos acrescentar informações
        this.base = b; // o this no contexto de classes e instâncias é a instância que está sendo criada
        this.altura = a;
        //o this é o objeto resultante
        //da construção de uma nova instância

    }

static calculaArea(ret) {
   return ret.altura * ret.base;
    }
}

console.log(Retangulo); //classe

// const vetor = new Array (1, 2, 3, 4, 5);

const retA = new Retangulo (3,4);  // criando a nova instância
const retB = new Retangulo (20,30);
const retC = new Retangulo (15,30);

console.log(retA); // chamando a instancia
console.log(retB); // instancia
console.log(retC); // instancia
// console.log(vetor);
// console.log(Array.isArray(vetor));
//executa metodos de instância
console.log(Retangulo.calculaArea(retA));
console.log(Retangulo.calculaArea(retB));

// console.log(retA.#altura);


class Quadrado extends Retangulo {

    constructor (base) {
        super(base,base);
        }

}

const quadA = new Quadrado (6);

console.log(quadA);