const boton = document.getElementById("btnPincel");


let mensajeCuadro = document.getElementById("mensaje");

let pincelActivo = false;



boton.addEventListener("click",function(){


    if(pincelActivo == false){
        pincelActivo = true;
        mensajeCuadro.textContent = "Pincel Activado"
    }else{
        pincelActivo = false;
        mensajeCuadro.textContent = "Pincel Desactivado"
    }

    
})


