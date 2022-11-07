export default class CalculadoraDeArea {
    constructor(tipo, base, altura) {
    this.tipo = tipo
    this.altura = altura
    this.base = base
    }


calcular () {
    if (this.tipo === 'triangulo') {
       return (this.base * this.altura) / 2
    } else if (this.tipo === 'quadrado' || this.tipo === 'retangulo') {
        return this.base * this.altura
    } else {
        return 'Tipo de retângulo inválido'
    }
  }
}