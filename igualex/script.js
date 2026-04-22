const cuadrado = document.getElementById('cuadrado');

// Posición inicial del cuadrado
let x = 100;
let y = 100;

//tamaño del cuadrado
const tamano = 80;

document.addEventListener('keydown', function(event) {

const anchoventana = window.innerWidth;
const altoventana = window.innerHeight;

let semovio=false;

const tecla = event.key.toLowerCase(); // Convertimos la tecla a minúscula para facilitar la comparación


switch(event.key) {
    case 'w':
        if (y > 0) {
            y -= 15;
            semovio = true;
        }
        break;
    case 's':
        if (y < altoventana - tamano) {
            y += 15;
            semovio = true;
        }
        break;
    case 'a':
        if (x > 0) {
            x -= 15;
            semovio = true;
        }
        break;
    case 'd':
        if (x < anchoventana - tamano) {
            x += 15;
            semovio = true;
        }
        break;
}

if (semovio) {
    cuadrado.style.left = x + 'px';
    cuadrado.style.top = y + 'px';

    //color aleatrio
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    cuadrado.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
});
