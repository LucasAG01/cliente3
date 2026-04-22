

// Devueleve elementos de la clase animal
const animales = document.querySelectorAll('.animal');
// Devuelve el elemento con id "arca"
const arca = document.getElementById('arca');


//Cuando epieces a arratstrar, guarda el ID

animales.forEach(function(animal) {
    animal.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
    });
});

// foreach -> Recorre todos lo aniamles, uno por uno.

// dragstart -> se dispara cuando empiezas a arrastrar un elemento. En este caso, guardamos el ID del animal que estamos arrastrando para poder usarlo después.

// event.target.id -> Obtiene el ID del elemento que se está arrastrando (el animal).

//datatransfer.setData('text/plain', event.target.id) -> Guarda el ID del animal en el objeto dataTransfer, que es lo que se utiliza para transferir datos durante una operación de arrastrar y soltar. El primer argumento 'text/plain' indica el tipo de datos que estamos guardando (en este caso, texto simple).

// Datatransfer es un mochila temporal del drag.


// Aceptar aninmales
arca.addEventListener('dragover', function(event) {
    event.preventDefault(); // Necesario para permitir soltar
});

// Soltar animales
arca.addEventListener('drop', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto (abrir el enlace, etc.)

    const idAnimal = event.dataTransfer.getData('text/plain'); // Obtenemos el ID del animal arrastrado
    const animal = document.getElementById(idAnimal); // Obtenemos el elemento del animal usando su ID

    arca.appendChild(animal); // Movemos el animal dentro del arca

    recolocarAnimales(); // Llamamos a la función para recolocar los animales dentro del arca

});




//recolocar animales
function recolocarAnimales() {
    const dentroArca = arca.querySelectorAll('.animal'); // Obtenemos los animales dentro del arca

    const total = dentroArca.length;

    const separacion =28; // Separación entre animales

    //Cuanto ocupa toda la fila de animales
    const ancho = (total - 1) * separacion; // Ancho total ocupado por los animales

    // Posición inicial para centrar los animales 👉 “Empieza a dibujar desde aquí para que todo quede centrado”
    const inicioX = (arca.clientWidth / 2) - (anchoTotal / 2); 

    const y  = arca.clientHeight / 2-11; // Posición vertical (ajusta según el tamaño de los animales)


    /*Para cada animal:
        lo coloco en absoluto dentro del arca
        le doy una posición X distinta según su orden
        todos tienen la misma Y → quedan alineados
    */
    dentroArca.forEach(function(animal, index) {

        animal.style.position = 'absolute'; // Para poder posicionar con left y top
        animal.style.left = (inicioX + index * separacion) + 'px'; // Posición horizontal
        animal.style.top = y + 'px'; // Posición vertical (puedes ajustar esto según tus necesidades)

    });

}


//LO que hace la funcion 
/*
1. coger animales dentro del arca
2. calcular cuánto ocupan
3. calcular dónde empezar
4. colocarlos uno a uno

Primero , dentroArca -> Obtenemos los animales dentro del arca usando querySelectorAll('.animal').

Luego, calculamos cuantos hay con total = dentroArca.length.

Despues separacion que debe haber -> 28px.(más que el tamaño de los animales para que no se solapen)

Cuanto ocupa toda la fila de animales -> ancho = (total - 1) * separacion. El total - 1 es porque el primer animal no necesita separación a la izquierda.

Calcular dónde empezar -> inicioX = (arca.clientWidth / 2) - (anchoTotal / 2). Esto centra los animales dentro del arca.

Busca el centro del arca
y coloca el grupo centrado


Posicion vertical -> y = arca.clientHeight / 2 - 11(mitad del emoji). Esto coloca los animales verticalmente centrados dentro del arca (ajustando por la mitad de su altura, que es 22px, por eso restamos 11).


Ahora recorremos cada animal con forEach.
colocar cada animal animal.style.left = (inicioX + index * separacion) + "px";

formula mental = posición = inicio + (posición_en_lista × separación)

POsicion vertical -> animal.style.top = y + "px";

animal.style.position = "absolute";
 Esto hace que se coloquen dentro del arca

(Solo funciona bien porque el arca tiene position: relative)


*/ 

