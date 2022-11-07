export default class Usuario {
    #senha
    constructor (nome, email, senha) {
        this.nome = nome;
        this.email = email
        this.#senha = senha;

    }

    autenticar(emailInformado, senhaInformada) {
        if (this.email === emailInformado && this.#senha === senhaInformada){
           alert ("Login realizado com sucesso!")
          return true
        } else {
          alert("Credenciais inválidas! Verifique as informações digitadas e tente novamente.")
          return false
        };
    }
}
