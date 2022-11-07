export default class Personagem {
    nome
    vida
    constructor(nome){
    this.nome = nome
    this.vida = 100
    }

sofreuDano (dano) {
    if (this.vida - dano < 0) {
        this.vida = 0
        } else {
            this.vida -= dano
    }
}

usouKitMedico () {
    if (this.vida + 10 > 100) {
        this.vida = 100
        } else {
            this.vida += 10
        }
    }
}


// const retundao = new Personagem ("Retundao");

// console.log(retundao.percentualVida);

// retundao.sofreuDano (1);

// console.log(retundao.percentualVida);

// retundao.usouKitMedico();

// console.log(retundao.percentualVida);