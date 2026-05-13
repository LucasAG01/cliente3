const boton = document.getElementById("btnCrear");
const lista = document.getElementById("lista");

let contador = 1;



boton.addEventListener("click",function(){

    const li = document.createElement("li");
    li.textContent = "Elemetno "+contador;
    lista.appendChild(li);
    contador++; //Tras crear el elemnto, aumenta nmero para siguinte


});

/*

Regla rápida
Si necesitas datos del evento → function(e)
Si no necesitas datos → function()

e también puede llamarse event, evento, etc.
Lo importante es que luego uses el mismo nombre.
*/ 