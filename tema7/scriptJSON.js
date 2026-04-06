

// Creamos el objeto XMLHttpRequest
let peticion = new XMLHttpRequest();

// Configuramos la petición: método GET, URL del recurso, asincrónica
peticion.open("GET", "https://jsonplaceholder.typicode.com/users", true);

peticion.send(); // Enviamos la petición

peticion.addEventListener("load", function() {
    let datos = peticion.responseText; // Obtenemos la respuesta como texto
    let usuarios = JSON.parse(datos); // Convertimos el texto JSON a un objeto JavaScript

    //Inicializamos una variable para almacenar el resultado
    let resultado = "";
    //Sacar name e email
    usuarios.forEach(element => {
        //console.log(element.name, element.email);
        // Concatenamos el nombre y el email al resultado, separados por un guion y un salto de línea
        resultado += element.name + " - " + element.email + "<br>";
    });

    // Mostramos el resultado en el div con id "resultado"
    document.getElementById("resultado").innerHTML = resultado;
});