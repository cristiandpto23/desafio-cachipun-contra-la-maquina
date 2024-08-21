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
let scoreGlobal = document.getElementById("rondasVeredicto")
let rondasBtn = document.getElementById("rondasBtn");
let jugadasContainer = document.getElementById("jugadas")
let resetBtn = document.getElementById("reset");
let jugador = 0;

function rondas() {
    intentos = prompt("¿Cuántas veces quieres jugar?");
    scoreIntentos.innerHTML = intentos;
    rondasBtn.style.display = "none";
    jugadasContainer.style.display = "block";
}

function jugarUno() {
    jugador = parseInt(document.querySelector(".input-1").value);
    proceso();
}

function jugarDos() {
    jugador = parseInt(document.querySelector(".input-2").value);
    proceso();
}

function jugarTres() {
    jugador = parseInt(document.querySelector(".input-3").value);
    proceso();
}

function jugadorMovimiento() {
    switch (jugador) {
        case 1:
            moveJugador.innerHTML = "🥌<br>piedra";
            break;
        case 2:
            moveJugador.innerHTML = "🧻<br>papel";
            break;
        case 3:
            moveJugador.innerHTML = "✂<br>tijera";
            break;
        default:
            moveJugador.innerHTML = " ";
            break;
    }
}

function computadorMovimiento(move) {
    switch (move) {
        case 1:
            moveComputadora.innerHTML = "🥌<br>piedra";
            break;
        case 2:
            moveComputadora.innerHTML = "🧻<br>papel";
            break;
        case 3:
            moveComputadora.innerHTML = "✂<br>tijera";
            break;
        default:
            moveComputadora.innerHTML = " ";
            break;
    }
}

function proceso() {
    if (intentos > 0) {
    
/*         jugador = parseInt(document.querySelector(".input").value); */
        jugadorMovimiento()

        let computador = Math.floor(Math.random() * 3)+1;
        computadorMovimiento(computador)

        if ((jugador == 1 && computador == 2) || (jugador == 2 && computador == 3) || (jugador == 3 && computador == 1)) {
            resultado. innerHTML ="Perdiste!<br>😔";
            perdidas++;
            scorePerdidas.innerHTML = perdidas;
        } else if ((jugador == 1 && computador == 3) || (jugador == 2 && computador == 1) || (jugador == 3 && computador == 2)) {
            resultado. innerHTML = "Ganaste!<br>😃";
            ganadas++;
            scoreGanadas.innerHTML = ganadas;
        } else if (jugador == computador) {
            resultado. innerHTML = "Empate!<br>😐";
            empates++;
            scoreEmpates.innerHTML = empates;
        }
        
        if (ganadas > perdidas) {
            scoreGlobal.innerHTML = "Vas Ganando! 😃";
        } else if (perdidas > ganadas) {
            scoreGlobal.innerHTML = "Vas Perdiendo! 😔";
        } else {
            scoreGlobal.innerHTML = "Vas Empatando? 😐";
        }
        intentos--;
        scoreIntentos.innerHTML = intentos;
        final();
    }
}

function final() {
    if (intentos === 0) {
        if (ganadas > perdidas) {
            scoreFinal = "ganaste el juego! 🎉";
        } else if (perdidas > ganadas) {
            scoreFinal = "perdiste el juego! 😢";
        } else {
            scoreFinal = "empataste el juego 😐";
        }
        scoreGlobal.innerHTML = `Se acabaron los intentos,<br>ya ${scoreFinal}`;
        jugadasContainer.style.display = "none";
        resetBtn.removeAttribute("disabled");
        /* resetBtn.style.display = "block"; */
        return
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
    jugadasContainer.style.display = "block";
    scoreGlobal.innerHTML = ` `;
    console.log(ganadas, perdidas, empates);
    resetBtn.setAttribute("disabled", 'true');
    moveJugador.innerHTML = " ";
    moveComputadora.innerHTML = " ";
    resultado. innerHTML = " ";
}

console.log(ganadas, perdidas, empates);