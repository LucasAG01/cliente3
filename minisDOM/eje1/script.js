const caja = document.getElementById("caja");
const boton =document.getElementById("btnColor");



boton.addEventListener("click",function(e){

    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);



    caja.style.backgroundColor = `rgb(${r},${g},${b})`;

});