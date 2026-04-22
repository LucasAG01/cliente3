// Obetenenos el elemento pelota del html
const pelota = document.getElementById('pelota');

// Posicion inicial der la pelota
let x = 50;
let y = 50;

// Angulo de rotación (simular giro)
let angulo = 0;

// pixeles que se mueve en cada pulsacion
const paso = 20;


// Detectamos cuando el usuario pulsa una tecla
document.addEventListener('keydown', function(event) {
    
    //Tamaño de la ventana para evitar que la pelota se salga
    const anchoventana = window.innerWidth;
    const altoventana = window.innerHeight;

    //Tamañlo fijo de la pelota
    const tamanoPelota = 100;

    // Variable para saber so realmente se ha movido la pelota (si no se mueve, no rotamos ni actualizamos su posición)
    let semovio = false;

    // COmprobamos que tecla ha pulsado
    switch(event.key) {
        case 'ArrowUp':
            // Solo se mueve si no está en el borde superior
            if (y > 0) {
                y -= paso; // Movemos hacia arriba
                angulo -= 45; // Giramos la pelota
                semovio = true;
            }
            break;

            //Flecha abajo
        case 'ArrowDown':
            // Evitamos que salga por abajo
            if (y < altoventana - tamanoPelota) {
                y += paso;
                angulo += 45;
                semovio = true;
            }
            break;

        case 'ArrowLeft':
            if (x > 0) {
                x -= paso;
                angulo -= 45;
                semovio = true;
            }
            break;

        case 'ArrowRight':
            if (x < anchoventana - tamanoPelota) {
                x += paso;
                angulo += 45;
                semovio = true;
            }
            break;
    }

    // Si la pelota se ha movido, actualizamos su posición en pantalla
    if (semovio) {
        pelota.style.left = x + 'px'; // Nueva posición horizontal
        pelota.style.top = y + 'px'; // Nueva posición vertical

        // Aplicamos la rotación para simular que rueda
        pelota.style.transform = 'rotate(' + angulo + 'deg)';
    }
});


// En este ejercicio todo se basa en 3 cosas

// 1. Guardar posicion y angulo de la pelota en variables (x, y, angulo)
// 2. Detectar teclas
// 3. Actualizar la pantalla

/*
🔁 Reglas que debes memorizar
Tecla	Qué pasa
↑	y -= paso
↓	y += paso
←	x -= paso
→	x += paso
*/

/*
if (y < altoVentana - tamañoPelota)

👉 Traducción:

“No te pases del borde”

💡 Importantísimo en examen:

derecha → window.innerWidth
abajo → window.innerHeight
*/

// Actualizar el DOM
/*
pelota.style.left = x + 'px';
pelota.style.top = y + 'px';

👉 Esto es lo MÁS importante de todo el ejercicio

💡 Traducción:

“Pon la pelota en la posición que tengo en mis variables”
*/
//pelota.style.transform = 'rotate(' + angulo + 'deg)';

/*
 ¿POR QUÉ seMovio?
let seMovio = false;

👉 Sirve para esto:

“Solo actualizo la pantalla si realmente se movió”

💡 Evita hacer cambios inútiles
*/

/*
Cuando te pongas en examen, piensa:

1. Tengo x e y
2. Detecto tecla
3. Cambio x o y
4. Compruebo límites
5. Actualizo posición en pantalla
6. Giro la pelota
*/

/*
🧪 SI TE PIDEN HACERLO DESDE 0

Empieza así SIEMPRE:

const pelota = document.getElementById('pelota');

let x = 50;
let y = 50;

document.addEventListener('keydown', function(e) {

    switch(e.key) {

    }

});

👉 Y luego vas rellenando

🚀 TRUCO PARA QUE TE SALGA SOLO

Imagínate esto:

“Estoy moviendo un personaje en un juego”

x → izquierda/derecha
y → arriba/abajo
teclado → control
style → dibujo
*/