const boton  = document.getElementById("cargar");

const resultado = document.getElementById("resultado");

boton.addEventListener("click",async function(){

    try{
    const respuesta = await fetch("https://api.open-meteo.com/v1/forecast?latitude=42.05&longitude=-8.64&current=temperature_2m");

        if(!respuesta.ok){
            throw new Error("Respuesta invalida")
        }
    
    //convertir JSON
    const datos = await respuesta.json();


    /*
    {
  "current": {
    "temperature_2m": 18.7
  }
}
    */

    resultado.textContent = "temperatura actual:"+datos.current.temperature_2m+" ºC";

    }catch(error){
        resultado.textContent = "Error cargar datos"
    }
        
    

});

/*
 await fetch(...)

  Espera a que llegue la respuesta del servidor.

 await respuesta.json()

     Convierte el JSON en un objeto JS usable.

 datos.current.temperature_2m

     Navegas por el JSON:

datos
 └── current
      └── temperature_2m
      */ 