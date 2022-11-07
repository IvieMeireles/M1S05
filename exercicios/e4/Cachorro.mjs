import Animal from "./Animal.mjs";

export default class Cachorro extends Animal {
    constructor (nome, idade) {
        super(nome, idade, 'Auau')
    }
}
