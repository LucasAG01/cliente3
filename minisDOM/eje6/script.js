const cajas = document.querySelectorAll(".caja");



//console.log(cajas)

cajas.forEach(function(caja){

    caja.addEventListener("mouseover",function(){
        
        caja.style.backgroundColor = "red";
        
    });
    
    caja.addEventListener("mouseout",function(){
        
        caja.style.backgroundColor = "white";
        
    });
    


});