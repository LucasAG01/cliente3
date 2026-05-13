const colores = document.querySelectorAll(".color");

let colorActivo ="";

colores.forEach(function(color){

    color.addEventListener("click",function(){
        
        colores.forEach(function(c){
            c.classList.remove("seleccionado");
        });

        color.classList.add("seleccionado");

        colorActivo = getComputedStyle(color).backgroundColor;

        // getComputedStyle(color).backgroundColor
        // sirve para coger el color real del CSS
    })


});