var cuadrado = document.getElementById('cuadrado');
var posicionX = 0;
var posicionY = 0;
var velocidad = 5;

function moverCuadrado(event) {
    switch (event.key) {
        case 'ArrowUp':
            posicionY -= velocidad;
            break;
        case 'ArrowDown':
            posicionY += velocidad;
            break;
        case 'ArrowLeft':
            posicionX -= velocidad;
            break;
        case 'ArrowRight':
            posicionX += velocidad;
            break;
    }

    cuadrado.style.top = posicionY + 'px';
    cuadrado.style.left = posicionX + 'px';
}

document.addEventListener('keydown', moverCuadrado);
