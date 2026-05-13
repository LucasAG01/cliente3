const caja = document.getElementById("personaje");

let x =100; //como ek top y left css puse 100 aqui tiene que se riguial

let y=100;

const paso = 20;
const tamano = 50;

document.addEventListener("keydown", function(e){

    const anchoVentana = window.innerWidth;
    const altoVentana = window.innerHeight;

    switch(e.key){
            case "ArrowUp":
                if( y > 0){
                y-=paso;
                caja.style.top = y +"px";
                }
                break;
            case "ArrowDown":
                if( y < altoVentana - tamano){
                y+=paso;
                caja.style.top = y +"px";
                }
                break;
            case "ArrowLeft":
                if(x > 0){
                x-=paso;
                caja.style.left = x + "px";
                }
                break;
            case "ArrowRight":
                if( x < anchoVentana - tamano){
                x +=paso;
                caja.style.left = x+"px";
                }
                break;                   
    }


});


/*

Reglas IMPORTANTES
Flecha	Qué cambia
Up	    y -= paso
Down	y += paso
Left	x -= paso
Right	x += paso


Fórmula 
arriba/izquierda → mayor que 0
abajo/derecha → menor que ventana - tamaño

*/ 