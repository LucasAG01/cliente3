// Obtener la referencia al elemento div por su clase
let miCaja = document.querySelector('.miCaja');
//otra forma:
//let miCaja = document.querySelector("div.miCaja");
//otra forma:
//let miCaja = document.getElementsByClassName("miCaja")[0];
console.log(miCaja);
// Modificar el estilo utilizando JavaScript
miCaja.style.width = '30%';
miCaja.style.height = '250px';
miCaja.style.border = '5px dashed #00FF00';
miCaja.style.paddingLeft = '15px';
miCaja.style.marginBottom = '25px';