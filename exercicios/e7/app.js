import Time from "./Time.mjs";
import Partida from "./Partida.mjs";

console.log("Exercício 7 da semana 5");

const times = [
    new Time ("Vasco", "VAS"),
    new Time ("Botafogo", "BOT"),
    new Time ("Flamengo", "FLA"),
    new Time ("Fluminense", "FLU"),
    new Time ("Tombense", "TOM"),
    new Time ("Time Bonito", "BNT"),
]

const partidas = [ 
    new Partida ("VAS", 2, "BNT", 4),
    new Partida ("FLA", 2, "BNT", 3),
    new Partida ("BOT", 2, "BNT", 6),
    new Partida ("TOM", 2, "BNT", 5),
    new Partida ("FLU", 0, "BNT", 1),
]

partidas.forEach (partida => {
    times.forEach(time => {
        time.computarPartida(partida) 
    })
})


times.forEach(time => {
    time.exibirSituacao()
})