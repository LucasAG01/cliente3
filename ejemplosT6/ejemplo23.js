// Obtener el cuarto elemento span.lt con la instrucción JavaScript
let cuartoElemento = document.querySelectorAll("p.pp > span.ce")[3];

// Realizar alguna acción con el elemento obtenido (por ejemplo, imprimir su texto)
if (cuartoElemento) {
    console.log(cuartoElemento.textContent);
} else {
    console.log("No se encontró el cuarto elemento span.ce");
}