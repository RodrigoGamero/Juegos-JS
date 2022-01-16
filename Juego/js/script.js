let turno = 0;
let numeroTurnos = 0;
let tablaBi = new Array();
let tablero = new Array(9);
let infoPartida = new Array();
let partida = {
    jugador1: "",
    jugador2: "",
    ganador: ""
};
let jugador1 = "";
let jugador2 = "";
let cuenta1 = 0;
let cuenta2 = 0;
let dibujo1 = ""
let dibujo2 = ""
let iniciar = document.querySelector('.Iniciar');
let inicio = document.querySelector('.inicio');
let ver = document.querySelector('.ver');
let juego1j = document.querySelector('.juego1j');
let puntos = document.querySelector('.puntos');
let turno1j = document.querySelector('.turno1j');
let puntos1j = document.querySelector('.puntos1j');
let juego = document.querySelector('.juego');
let revancha1j = document.querySelector('#revancha1j');

// Iniciar la partida
iniciar.addEventListener('click', () => {
    inicio.style.display = 'none';
    document.querySelector('.modo').style.display = 'block';
})

// Consultar histrial
document.querySelector('.Historial').addEventListener('click', () => {
    guardarInformacion()
    infoPartida = JSON.parse(localStorage.getItem('partidas'));
    inicio.style.display = 'none';
    ver.style.display = 'block';
    document.querySelector('.texto').innerHTML = "";
    infoPartida.forEach(elemento => {
        let texto = `<p><strong>JUGADOR 1:</strong> ${elemento.jugador1}    -    <strong>JUGADOR 2:</strong> ${elemento.jugador2}    -    <strong>GANADOR:</strong> ${elemento.ganador}</p>`
        document.querySelector('.texto').innerHTML += texto;
    })
})


document.getElementsByClassName('1jugador')[0].addEventListener('click', () => {
    document.querySelector('.modo').style.display = 'none';
    document.querySelector('.nombre').style.display = 'block';
})


document.querySelector('.empezar1j').addEventListener('click', (e) => {
    dibujo1 = document.querySelector('#eleccion3').value;
    dibujo2 = document.querySelector('#eleccion4').value;
    console.log(dibujo1);
    console.log(dibujo2);
    if (document.querySelector('#j1m1').value == "" || dibujo1 == dibujo2) {
        e.preventDefault();
    } else {
        jugador1 = document.querySelector('#j1m1').value;
        document.querySelector('.nombrej11').innerHTML = jugador1;
        document.querySelector('.nombre').style.display = 'none';
        juego1j.style.display = 'flex';
        turno1j.innerHTML = `Turno de ${jugador1}`
        puntos1j.innerHTML = `${cuenta1} - ${cuenta2}`
        partida.jugador1 = jugador1
        partida.jugador2 = 'Máquina'
        
    }

})

// Iniciar la partida 2 jugadores
document.getElementsByClassName('2jugador')[0].addEventListener('click', () => {
    document.querySelector('.modo').style.display = 'none';
    document.querySelector('.nombres').style.display = 'block';
})


// Botones volver
document.querySelector('#volver2').addEventListener('click', () => {
    juego.style.display = 'none';
    juego1j.style.display = 'none';
    inicio.style.display = 'block';
    reiniciar();
    cuenta1 = 0;
    cuenta2 = 0;
    guardarInformacion()
})

document.querySelector('#volver').addEventListener('click', () => {
    juego.style.display = 'none';
    juego1j.style.display = 'none';
    inicio.style.display = 'block';
    reiniciar2j();
    cuenta1 = 0;
    cuenta2 = 0;
})


document.querySelector('.empezar').addEventListener('click', (e) => {
    dibujo1 = document.querySelector('#eleccion1').value;
    dibujo2 = document.querySelector('#eleccion2').value;
    if (document.querySelector('#j1').value == "" || document.querySelector('#j2').value == "" || dibujo1 == dibujo2) {
        e.preventDefault();
    } else {
        jugador1 = document.querySelector('#j1').value;
        jugador2 = document.querySelector('#j2').value;
        document.querySelector('.nombrej1').innerHTML = jugador1;
        document.querySelector('.nombrej2').innerHTML = jugador2;
        puntos.innerHTML = `${cuenta1} - ${cuenta2}`
        document.querySelector('.nombres').style.display = 'none';
        juego.style.display = 'flex';
        document.querySelector('.turno').innerHTML = `Turno de ${jugador1}`
        partida.jugador1 = jugador1
        partida.jugador2 = jugador2
    }

})


// Desarrollo del juego para 2 jugadores
document.querySelectorAll('.buton').forEach((elemento, index) => {

    elemento.addEventListener('click', (e) => {
        if (e.target.style.background != `url("./img/${dibujo1}.png") 0% 0% / contain` && e.target.style.background != `url("./img/${dibujo2}.png") 0% 0% / contain` && !esGanador()) {
            if (numeroTurnos < 9 && !esGanador()) {
                tablero[index] = turno;
                if (turno == 0) {
                    document.querySelector('.turno').innerHTML = `Turno de ${jugador2}`
                    e.target.style.background = `url('./img/${dibujo1}.png')`;
                    e.target.style.backgroundSize = 'contain';
                    turno = 1;
                } else {
                    document.querySelector('.turno').innerHTML = `Turno de ${jugador1}`
                    e.target.style.background = `url('./img/${dibujo2}.png')`
                    e.target.style.backgroundSize = 'contain';
                    turno = 0;
                }
                numeroTurnos++;
                tablaBi = pasarBi();
            }
            if (esGanador()) {
                if (turno == 0) {
                    document.querySelector('.turno').innerHTML = `El ganador es ${jugador2}`
                    partida.ganador = jugador2
                    infoPartida.push(cogerInfo());
                    cuenta2++;
                    puntos.innerHTML = `${cuenta1} - ${cuenta2}`
                } else {
                    cuenta1++;
                    puntos.innerHTML = `${cuenta1} - ${cuenta2}`
                    document.querySelector('.turno').innerHTML = `El ganador es ${jugador1}`
                    partida.ganador = jugador1
                    infoPartida.push(cogerInfo());
                }
                document.querySelector('#revancha2j').style.display = 'block'
                document.querySelector('#volver').style.display = 'block'
                // Aqui tengo qeu guardar la informacion del ganador de la partida
            } else if (!esGanador() && numeroTurnos == 9) {
                document.querySelector('.turno').innerHTML = `EMPATE`
                document.querySelector('#revancha2j').style.display = 'block'
                document.querySelector('#volver').style.display = 'block'
                partida.ganador = 'Empate'
                infoPartida.push(cogerInfo());
            }
        }
    });
})


// Desarrollo del juego para 1 jugador
document.querySelectorAll('.buton1').forEach((elemento, index) => {
    elemento.addEventListener('click', (e) => {
        console.log('dibujo1: ' + dibujo1)
        console.log('dibujo1: ' + dibujo2)
        if (e.target.style.background != `url("./img/${dibujo1}.png") 0% 0% / contain` && e.target.style.background != `url("./img/${dibujo2}.png") 0% 0% / contain` && !esGanador()) {
            if (numeroTurnos < 9 && !esGanador()) {
                tablero[index] = turno;
                if (turno == 0) {
                    e.target.style.background = `url('./img/${dibujo1}.png')`;
                    e.target.style.backgroundSize = 'contain';
                    turno = 1;
                }
                numeroTurnos++;
                tablaBi = pasarBi();

                if (esGanador()) {
                    if (turno == 1) {
                        turno1j.innerHTML = `El ganador es ${jugador1}`
                        cuenta1++
                        puntos1j.innerHTML = `${cuenta1} - ${cuenta2}`
                        partida.ganador = jugador1
                    } else {
                        turno1j.innerHTML = `El ganador es Máquina`
                        cuenta2++
                        puntos1j.innerHTML = `${cuenta1} - ${cuenta2}`
                        partida.ganador = 'Máquina'
                    }
                    infoPartida.push(cogerInfo());
                    revancha1j.style.display = 'block'
                    document.querySelector('#volver2').style.display = 'block'
                    return true;
                } else if (!esGanador() && numeroTurnos == 9) {
                    revancha1j.style.display = 'block'
                    document.querySelector('#volver2').style.display = 'block'
                    turno1j.innerHTML = `EMPATE`
                    partida.ganador = 'Empate'
                    infoPartida.push(cogerInfo());
                    return false;
                }

                let random = Math.trunc(Math.random() * 9);
                while ((document.querySelectorAll('.buton1')[random].style.background == `url("./img/${dibujo1}.png") 0% 0% / contain` || document.querySelectorAll('.buton1')[random].style.background == `url("./img/${dibujo2}.png") 0% 0% / contain`) && !esGanador()) {
                    random = Math.trunc(Math.random() * 9);
                }
                document.querySelectorAll('.buton1')[random].style.background = `url('./img/${dibujo2}.png')`;
                document.querySelectorAll('.buton1')[random].style.backgroundSize = 'contain';
                tablero[random] = turno;
                turno = 0;
                turno1j.innerHTML = `Turno de ${jugador1}`
                numeroTurnos++;
                tablaBi = pasarBi();
                console.log(tablaBi)
                if (esGanador()) {
                    if (turno == 1) {
                        turno1j.innerHTML = `El ganador es ${jugador1}`
                        cuenta1++
                        console.log(cuenta1 + ' ' + cuenta2);
                        puntos1j.innerHTML = `${cuenta1} - ${cuenta2}`
                        partida.ganador = jugador1
                    } else {
                        turno1j.innerHTML = `El ganador es Máquina`
                        cuenta2++
                        console.log(cuenta1 + ' ' + cuenta2);
                        puntos1j.innerHTML = `${cuenta1} - ${cuenta2}`
                        partida.ganador = 'Máquina'
                    }
                    infoPartida.push(cogerInfo());
                    revancha1j.style.display = 'block'
                    document.querySelector('#volver2').style.display = 'block'
                    return true;
                } else if (!esGanador() && numeroTurnos == 9) {
                    turno1j.innerHTML = `EMPATE`
                    console.log("EMPATE");
                    revancha1j.style.display = 'block'
                    document.querySelector('#volver2').style.display = 'block'
                    partida.ganador = 'Empate'
                    infoPartida.push(cogerInfo());
                    return false;
                }
            }
        }
    }
    )
});

// Boton revancha

revancha1j.addEventListener('click', () => {
    reiniciar();
});

document.querySelector('#revancha2j').addEventListener('click', () => {
    reiniciar2j();
});


document.querySelector('#volver3').addEventListener('click', () => {
    ver.style.display = 'none'; 
    inicio.style.display = 'block';
})

// Funciones

function pasarBi() {
    let bidi = new Array(3);
    contador = 0;
    for (let i = 0; i < bidi.length; i++) {
        bidi[i] = new Array(3);
        for (let j = 0; j < 3; j++) {
            bidi[i][j] = tablero[contador];
            contador++;
        }
    }
    return bidi;
}

function esGanador() {
    if (compruebaColumnas() || compruebaFilas() || compruebaDia()) {
        return true;
    } else {
        return false;
    }

}

function compruebaColumnas() {
    for (let i = 0; i < 3; i++) {
        if (tablaBi[i] != undefined) {
            if (tablaBi[0][i] == tablaBi[1][i] && tablaBi[0][i] == tablaBi[2][i] && tablaBi[0][i] != undefined) {
                return true;
            }
        }
    }
}

function compruebaFilas() {
    for (let i = 0; i < 3; i++) {
        if (tablaBi[i] != undefined) {
            if (tablaBi[i][0] == tablaBi[i][1] && tablaBi[i][0] == tablaBi[i][2] && tablaBi[i][0] != undefined) {
                return true;
            }
        }
    }
}

function compruebaDia() {
    if (tablaBi[0] != undefined) {
        return (tablaBi[0][0] == tablaBi[1][1] && tablaBi[0][0] == tablaBi[2][2] && tablaBi[0][0] != undefined)
            || (tablaBi[0][2] == tablaBi[1][1] && tablaBi[0][2] == tablaBi[2][0] && tablaBi[0][2] != undefined);
    }
}

function reiniciar() {
    tablaBi = new Array();
    tablero = new Array(9);
    numeroTurnos = 0;
    turno = 0;
    turno1j.innerHTML = `Turno de ${jugador1}`
    document.querySelectorAll('.buton1').forEach((elemento) => { elemento.style.background = '' })
    revancha1j.style.display = 'none';
    document.querySelector('#volver2').style.display = 'none';
}

function reiniciar2j() {
    tablaBi = new Array();
    tablero = new Array(9);
    numeroTurnos = 0;
    turno = 0;
    document.querySelector('.turno').innerHTML = `Turno de ${jugador1}`
    document.querySelectorAll('.buton').forEach((elemento) => { elemento.style.background = '' })
    document.querySelector('#revancha2j').style.display = 'none';
    document.querySelector('#volver').style.display = 'none';
}

function guardarInformacion() {
    localStorage.setItem('partidas', JSON.stringify(infoPartida));
}

function cogerInfo(){
    let partida2 = {
        jugador1: partida.jugador1,
        jugador2: partida.jugador2,
        ganador: partida.ganador
    };

    return partida2;
}