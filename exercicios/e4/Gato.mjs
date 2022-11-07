import Animal from "./Animal.mjs";


export default class Gato extends Animal {
    constructor (nome, idade) {
        super(nome, idade, 'Miau')
    }
}
