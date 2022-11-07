// const instancia = {
//     identificacao: 4234234,
//     identificacaogetter: "Sim, isso foi feito com get",
//     getMetodo: function () {
//         return `ID: ${this.identificacao}`;
//     },
//     get getter () {
//         return `ID Getter: ${this.identificacaogetter}`
//     }
// };

// console.log(instancia.identificacao);
// console.log(instancia.getMetodo()); //método comum precisa chamar a função com parênteses
// console.log(instancia.getter); // no método get, voccê pode chamar como se fosse uma variável comum

class Animal {
    #nome
    altura = 5
    largura = 10
    constructor(nome) {
      this.#nome = nome;
    }
    getMetodoComum() {
      return `Id: ${this.#nome}`;
    }
    get getMetodoGetter() {
          //adicione aqui a lógica de transformação se necessário
      return `Id: ${this.#nome}`;
    }
    setMetodoComum(valor) {
      this.#nome = valor;
    }
    set setMetodoSetter(valor) {
        //adicione aqui a lógica de transformação se necessário
      this.#nome = valor;
    }
    get area () {
        return this.altura * this.largura
    }
  }
  const instancia = new Animal("Preguiça");
  
  //console.log(instancia.#nome);
  console.log(instancia.getMetodoComum());
  console.log(instancia.getMetodoGetter);
  
  instancia.setMetodoComum("Tatu");
  console.log(instancia.getMetodoGetter);
  
  instancia.setMetodoSetter = "Jaguatirica";
  console.log(instancia.getMetodoGetter);

  console.log(instancia.area);


function deFora () {
    const variavelInterna = "Romeu";
        return function deDentro() {
            console.log(variavelInterna);
        }
    }
const f = deFora();

f();


function transformaTexto (texto, operacao) {
    let funcao 

    switch (operacao) {
        case 'maiuscula':
            funcao = t => t.toUpperCase();            
            break;

        case 'minusculas':
            funcao = t => t.toLowerCase();  
            break;

            default:
                funcao = t => t;
    }

    return funcao(texto);
}

console.log(transformaTexto('blah', 'maiuscula'));