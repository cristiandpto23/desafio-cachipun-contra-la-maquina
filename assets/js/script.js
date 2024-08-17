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
let scoreGlobal = document.getElementById("rondas__veredicto")
let rondasBtn = document.getElementById("rondasBtn");
let jugadasContainer = document.getElementById("jugadas")
let resetBtn = document.getElementById("reset");


function rondas() {
    intentos = prompt("¿Cuántas veces quieres jugar?");
    scoreIntentos.innerHTML = intentos;
    rondasBtn.style.display = "none";
}

function jugar() {
    final();
    proceso();
}

function proceso() {
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
            scorePerdidas.innerHTML = perdidas;
        } else if ((jugador == 1 && computador == 3) || (jugador == 2 && computador == 1) || (jugador == 3 && computador == 2)) {
            resultado. innerHTML = "Ganaste! 😃";
            ganadas++;
            scoreGanadas.innerHTML = ganadas;
        } else if (jugador == computador) {
            resultado. innerHTML = "Empate! 😐";
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

    }
}

function final() {
    if (intentos === 0) {
        if (ganadas > perdidas) {
            scoreFinal = "ganaste el juego!<br> 🎉";
        } else if (perdidas > ganadas) {
            scoreFinal = "perdiste el juego!<br> 😢";
        } else {
            scoreFinal = "empataste el juego<br> 😐";
        }
        scoreGlobal.innerHTML = `Se acabaron los intentos,<br>ya ${scoreFinal}`;
        jugadasContainer.style.display = "none";
        resetBtn.style.display = "block";
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
    resetBtn.style.display = "none";
}

console.log(ganadas, perdidas, empates);