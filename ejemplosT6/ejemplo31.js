// Seleccionamos todos los elementos que se pueden arrastrar (con clase "cosa")
let elementosOrigen = document.getElementsByClassName("cosa");

// Seleccionamos el contenedor destino donde se podrán soltar los elementos
let caja = document.getElementById("caja");

// Mostramos por consola los elementos arrastrables, útil para depuración
console.log(elementosOrigen);

// Recorremos cada elemento arrastrable para asignar el evento "dragstart"
Array.from(elementosOrigen).forEach(function(elemento){
  // Cuando el usuario empieza a arrastrar, se ejecuta la función iniciadoArrastre
  elemento.addEventListener("dragstart", (evento)=>iniciadoArrastre(evento));
});

// Al contenedor destino le asignamos el evento "dragover"
// Es necesario permitir este evento para que el "drop" funcione
caja.addEventListener("dragover", (evento)=>permitirSoltar(evento));

// Cuando se suelta el elemento en la caja, se ejecuta la función soltar
caja.addEventListener("drop", (evento)=>soltar(evento));

/* Función que se ejecuta al comenzar a arrastrar un elemento */
function iniciadoArrastre(evento) {
  console.log("arrastrar");
  // Guardamos el id del elemento arrastrado en el objeto dataTransfer
  evento.dataTransfer.setData("IdElementoOrigen",evento.target.id);
}

/* Función que permite que un elemento se suelte en el destino */
function permitirSoltar (evento) {
  console.log("permitesoltar");
  // Por defecto, no se permite soltar. Esta función evita ese comportamiento.
  evento.preventDefault();
}

/* Función que se ejecuta cuando se suelta un elemento sobre el destino */
function soltar(evento) {
  evento.preventDefault(); // Previene el comportamiento por defecto
  // Obtenemos el id del elemento arrastrado desde dataTransfer
  const elementoArrastrandose = evento.dataTransfer.getData("IdElementoOrigen");
  // Localizamos el elemento arrastrado por su id
  const elementoArrastrado = document.getElementById(elementoArrastrandose);
  // Lo añadimos dentro de la caja (contenedor de destino)
  caja.appendChild(elementoArrastrado);
}

