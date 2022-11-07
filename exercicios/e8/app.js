import Usuario from "./Usuario.mjs";

console.log("Exercício 8 da semana 5");

const cEmail = document.getElementById('campo-email')
const cSenha = document.getElementById('campo-senha')
const botaoLogin = document.getElementById('botao-login')
const pMensagem = document.getElementById('p-mensagem')

const usuario1 = new Usuario(
    'Ivie',
    'ivie@ivie',
    '1234',
)

botaoLogin.addEventListener ('click', () => {
    const usuario = cEmail.value
    const senha = cSenha.value
    const validaUsuario = usuario1.autenticar(usuario,senha)
    if (validaUsuario){
        pMensagem.innerHTML = 'Login realizado com sucesso!'
    } else {
        pMensagem.innerHTML = 'Credenciais inválidas! Tente novamente.'
    }    
})