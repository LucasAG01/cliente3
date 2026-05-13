

const boton  = document.getElementById("crear");


let contenedor = document.getElementById("contenedor");



boton.addEventListener("click",function(){

    let caja = document.createElement('div');

    caja.style.width="50px";
    caja.style.height="50px";

    caja.style.backgroundColor="blue";

    // importante
    // position:absolute
    // Permite colocar un elemento en una posición exacta usando:
    // left
    // top
    // right
    // bottom
    caja.style.position="absolute";

    let x = Math.floor(Math.random() * window.innerWidth);

    let y = Math.floor(Math.random() * window.innerHeight);

    caja.style.left = x+"px";
    caja.style.top = y + "px";


    contenedor.appendChild(caja);


});