// Seleccionamos todos los elementos que tienen la clase "color"
// Estos son los colores de la paleta
const colores = document.querySelectorAll(".color");

// Seleccionamos todas las cajas que se podrán pintar
const cajas = document.querySelectorAll(".caja");

// Variable donde guardaremos el color que el usuario ha elegido
// Al principio está vacío porque todavía no se ha seleccionado ningún color
let colorActivo = "";

// Recorremos todos los colores de la paleta, uno por uno
colores.forEach(function (color) {

  // A cada color le añadimos un evento click
  // Esto se ejecuta cuando el usuario hace click en ese color
  color.addEventListener("click", function () {
    
    // Recorremos todos los colores otra vez
    // para quitarles la clase "seleccionado"
    colores.forEach(function (c) {

      // Quitamos la clase seleccionado a cada color
      // Así nos aseguramos de que solo haya un color seleccionado
      c.classList.remove("seleccionado");

    });

    // Añadimos la clase "seleccionado" al color que acabamos de pulsar
    // Esto sirve para marcar visualmente cuál está activo
    color.classList.add("seleccionado");

    // Guardamos el color real de fondo del elemento seleccionado
    // getComputedStyle permite leer el color que viene del CSS
    colorActivo = getComputedStyle(color).backgroundColor;

  });

});

// Recorremos todas las cajas que se pueden pintar
cajas.forEach(function(caja) {

    // A cada caja le añadimos un evento mouseover
    // Esto se ejecuta cuando el ratón pasa por encima
    caja.addEventListener("mouseover", function() {

        // Comprobamos que ya haya un color seleccionado
        // Si colorActivo está vacío, no pintamos nada
        if (colorActivo !== "") {

            // Pintamos la caja con el color seleccionado
            caja.style.backgroundColor = colorActivo;

        }

    });

});


/*
1. Selecciono colores y cajas
2. Hago click en un color
3. Guardo ese color en colorActivo
4. Paso el ratón por una caja
5. Pinto la caja con colorActivo
*/ 