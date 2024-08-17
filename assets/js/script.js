/* 
piedra = 1
papel = 2
tijera = 3 
*/

let ganadas = 0;
let perdidas = 0;
let empates = 0;
let intentos = 0;

let scoreGanadas = document.getElementById("wins");
let scorePerdidas = document.getElementById("losses");
let scoreEmpates = document.getElementById("draws");
let scoreIntentos = document.getElementById("attempts");
let resultado = document.getElementById("resultado");
let moveJugador = document.getElementById("movidaJugador");
let moveComputadora = document.getElementById("movidaComputadora");

function rondas() {
    intentos = prompt("¿Cuántas veces quieres jugar?");
    scoreIntentos.innerHTML = intentos;

}

function jugar() {
    if (intentos > 0) {
        let jugador = parseInt(document.querySelector(".input").value);
        switch (jugador) {
            case 1:
                moveJugador.innerHTML = "🥌 piedra";
                break;
            case 2:
                moveJugador.innerHTML = "🧻 papel";
                break;
            case 3:
                moveJugador.innerHTML = "✂ tijera";
                break;
            default:
                moveJugador.innerHTML = " ";
                break;
        }

        let computador = Math.floor(Math.random() * 3)+1;
        switch (computador) {
            case 1:
                moveComputadora.innerHTML = "🥌 piedra";
                break;
            case 2:
                moveComputadora.innerHTML = "🧻 papel";
                break;
            case 3:
                moveComputadora.innerHTML = "✂ tijera";
                break;
            default:
                moveComputadora.innerHTML = " ";
                break;
        }


        if ((jugador == 1 && computador == 2) || (jugador == 2 && computador == 3) || (jugador == 3 && computador == 1)) {
            resultado. innerHTML ="Perdiste! 😔";
            perdidas++;
            intentos--;
            scorePerdidas.innerHTML = perdidas;
            scoreIntentos.innerHTML = intentos;
            
        } else if ((jugador == 1 && computador == 3) || (jugador == 2 && computador == 1) || (jugador == 3 && computador == 2)) {
            resultado. innerHTML = "Ganaste! 😃";
            ganadas++;
            intentos--;
            scoreGanadas.innerHTML = ganadas;
            scoreIntentos.innerHTML = intentos;
        } else if (jugador == computador) {
            resultado. innerHTML = "Empate! 😐";
            empates++;
            intentos--;
            scoreEmpates.innerHTML = empates;
            scoreIntentos.innerHTML = intentos;
        } else {
            alert("Alternativa no válida");
        }
    } else {
        alert("Se acabaron los intentos");
        if (ganadas > perdidas) {
            alert("Ganaste el juego! 🎉");
        } else if (perdidas > ganadas) {
            alert("Perdiste el juego! 😢");
        } else {
            alert("Empataste el juego? 😐");
        }
    } 
}

function reset() {
    ganadas = 0;
    perdidas = 0;
    empates = 0;
    intentos = prompt("¿Cuánta veces quieres jugar?");
    scoreGanadas.innerHTML = ganadas;
    scorePerdidas.innerHTML = perdidas;
    scoreEmpates.innerHTML = empates;
    scoreIntentos.innerHTML = intentos;
    console.log(ganadas, perdidas, empates);
}

console.log(ganadas, perdidas, empates);