export default class Fatura {
id //cod do produto
descricao //descricao do item
quantia // quantidade comprada
preco // valor unitario
    constructor(id, descricao, quantia = 0, preco) {
    this.id = id
    this.descricao = descricao
    this.quantia = quantia > 0 ? quantia : 0
    this.preco = preco > 0 ? preco : 0
}

obterValorTotal() {

    return this.quantia * this.preco   


}
get valorTotal () {
    return this.obterValorTotal()
}
}

// const batata = new Fatura (1, "Batata", 2, 10)

// const valor = batata.obterValorTotal();

// console.log(`O valor da compra é de ${valor} reais`);