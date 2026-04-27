let párrafo = document.getElementsByTagName("p");
//podemos ver en la consola todas las propiedades y su valor
//opción1
console.log(párrafo[3].textContent);
console.log(párrafo[párrafo.length-2].textContent);
//opción2
console.log(párrafo[3].innerHTML);
//opción3
console.log(párrafo[3].innerText);
//opción4
console.log(párrafo[3].outerText);