//Acceder a ele,entos


// Busca elemento por su id
let elemento = document.getElementById("apellidos");

// Busca elemento por name devuelve una coleccion
let elemento2 = document.getElementsByName("apellidos");

// Acceser al primero
let elemento3 = document.getElementsByName("apellidos")[0];

// Buscar por etiqueta
let elemento4 = document.getElementsByTagName("input");
// Buscar el 4 input
let elemento5 = document.getElementsByTagName("input")[3];



// Modificar Atruibutos

//Si tengo esto 
//<input type="text" id="apellidos" name="apellidos">

// Cambiar de atributo
document.getElementById("apellidos").setAttribute("type","password");

// Obetner atributo
let valor = document.getElementById("apellidos").getAttribute("type");

// Eliminar atributo
document.getElementById("apellidos").removeAttribute("type");


// Cambiar como propiedad
document.getElementById("apellidos").type = "text";






// Acceder y modificar texto
//<p id="texto">Hola mundo</p>

document.getElementById("texto").textContent = "Adios mundo";


// Los nodos de texto childNodes, firstChild, lastChild, nodeValue
// Si tengo esto <p>Hola <b>mundo</b></p>

//obetner "mundo"
let nodo = document.getElementsByTagName("p")[0].childNodes[1].childNodes[0].nodeValue // "mundo"


/*
getElementsByTagName("p")[0] → coge el primer <p>

childNodes[1] → coge el segundo hijo del <p>, que es <b>

childNodes[0] → coge el texto dentro de <b>

nodeValue → devuelve el texto
*/


//Crear y borrar nodos

// Crear un elemnto
let nuevoParrafo = document.createElement("p");

// Crear texto
let nuevotexto = document.createTextNode("Hola, soy nuevo");

// Agregar el texto al parrafo
nuevoParrafo.appendChild(nuevotexto);

// Agregar el parrafo al body
document.body.appendChild(nuevoParrafo);

// Ejemplo
let p = document.createElement("p");
let texto = document.createTextNode("Hola, soy un nuevo parrafo");
p.appendChild(texto);
document.body.appendChild(p);


// Eliminar un nodo
let padre = document.getElementById("contenedor");
let hijo = document.getElementById("parrafo");
padre.removeChild(hijo);


/*
Propiedades importantes de nodos

Estas te las pueden preguntar de teoría.

Muy importantes

nodeName → nombre del nodo

nodeValue → valor del nodo

nodeType → tipo de nodo

parentNode → nodo padre

childNodes → hijos

firstChild → primer hijo

lastChild → último hijo

previousSibling → hermano anterior

nextSibling → hermano siguiente

attributes → atributos del elemento

Muy importantes también los métodos

appendChild()

cloneNode()

hasChildNodes()

insertBefore()

removeChild()

replaceChild()
*/ 



//Ejemplo de evento 
document.getElementById("boton").onclick = function() {
    alert("Has pulsado el boton");
}


// Formas de registrar eventos
// 1. Atributo HTML 
  // <button onclick="saludar()">Pulsa</button>
  

// 2. Propiedad del elemento
    // document.getElementById("boton").onclick = saludar;


// 3. addEventListener
    // document.getElementById("boton").addEventListener("click", saludar, false);






// Captura y burbujeo

// Si tengo un elemnto dentro de otro

/*
 <div id="padre">
      <button id="hijo">Pulsa</button>
 </div>
*/ 

// Cuando hago click en el boton, la captura va de fuera a dentro.
// padre -> hijo

// burbujeo va de dentro a fuera
// hijo -> padre


// W3C combina ambos
 // Con addEventListener(evento, funcion, true) → captura
 // Con addEventListener(evento, funcion, false) → burbujeo



//Objeto Event
// Cuando ocurre un evento, JavaScript puede darte un objeto con infromación

document.getElementById("boton").addEventListener("click", function(event) {
    alert(event.type); // Tipo de evento
});


/*
Propiedades importantes

type → tipo de evento

target → elemento donde ocurrió

currentTarget → elemento que tiene el evento asignado

clientX, clientY → posición del ratón en ventana

pageX, pageY → posición del ratón en página

button → botón del ratón

keyCode, charCode, which → tecla pulsada

altKey, ctrlKey, shiftKey, metaKey → si hay teclas especiales pulsadas
*/ 


/*
Métodos importantes

preventDefault() → evita la acción por defecto

stopPropagation() → impide que el evento siga propagándose
*/ 

/*
Eventos de teclado

Los 3 principales:

keydown

keypress

keyup

Diferencia sencilla

keydown → cuando pulsas la tecla

keypress → cuando se genera el carácter

keyup → cuando la sueltas
*/ 

// Ejemplo detectar Enter
document.getElementById("nombre").addEventListener("keypress", function(event) {

    if(event.key === "Enter") {
        alert("Has pulsado Enter");
    }
});



// Ejemplo evento de raton

/*
Muy importantes:

click
dblclick
mousedown
mouseup
mousemove
mouseover
mouseout

Botones del ratón con button

0 → izquierdo
1 → medio
2 → derecho
*/ 

document.addEventListener("mousedown",function(event) {
    alert("Boton del ratón: " + event.button);
});




//Ejercicio 1 
/*
Tenemos este HTML:

<p id="mensaje">Hola mundo</p>
Pregunta

Escribe la línea de JavaScript para guardar ese elemento en una variable llamada parrafo.
*/ 

let parrafo = document.getElementById("mensaje");

//Ejercicio 2
/*
<p id="mensaje">Hola mundo</p>
Pregunta

Cambia el texto para que diga:

Hola Antonio
*/
document.getElementById("mensaje").textContent = "Hola Antonio";




//Ejercicio 3

/*
<input type="text" id="nombre">
Pregunta

Guarda en una variable llamada tipo el valor del atributo type.
*/ 
let tipo = document.getElementById("nombre").getAttribute("type");




//Ejercicio 4

/*
HTML:

<input type="text" id="nombre">
Pregunta

Convierte ese campo en password.
*/ 
document.getElementById("nombre").setAttribute("type","password");



//Ejercicio 5
/*
HTML:

<div id="contenedor" align="left"></div>
Pregunta

Elimina el atributo align.
*/

document.getElementById("contenedor").removeAttribute("align");



//Ejercico 6
/* 
Queremos crear esto con JavaScript:

<p>Hola desde JavaScript</p>
Pregunta

¿Cuál es el primer paso?
*/
let ppe = document.createElement("p");



//Ejercicio 7
/*Ahora queremos añadir el texto.*/

let textope = document.createTextNode("Hola desde JavaScript");


//Ejercicio 8
/*Ahora queremos agregar el texto al párrafo.*/
ppe.appendChild(textope);

//Ejercicio 9
/*Ahora queremos agregar el párrafo al body.*/
document.body.appendChild(ppe);



// Ejercicio 10
//<button id="boton">Pulsa</button>

//Cuanod pulse boton que aparezca Hola
document.getElementById("boton").addEventListener("click", function() {
    alert("Hola");
});


    
// Ejercicio 11
// Queremos detectar cuando el usuario pulsa Enter.

document.addEventListener("keypress", function(evt) {
    if (evt.key === "Enter") {
        alert("Has pulsado Enter");
    }
});



// Ejercicio 12

//Queremos mostrar la posición del ratón.

document.addEventListener("mousemove", function(e) {
    console.log(e.clientX, e.clientY);
});



document.getElementById("texto").textContent = "Hola examen";

let eso = document.getElementById("campo").getAttribute("type");

eso.setAttribute("type","password");

let titulo = document.createElement("h1");
titulo.textContent = "Titulo creado";
document.body.appendChild(titulo);


document.getElementById("contenedor").removeChild(document.getElementById("eliminar"));

let butonn = document.getElementById("btn");
butonn.addEventListener("click", function(event) {
alert("Has pulsado el boton");

});


document.addEventListener("keydown", function(event) {
if(event.key === "Enter") {
    alert("ENTER detectado");
}

});



let input = document.getElementById("nombre");

let botn = document.getElementById("btn");

botn.addEventListener("click", function() {

    alert("El valor del input es: " + input.value);
});



let crearBtn = document.getElementById("crear");

crearBtn.addEventListener("click", function() { 

    let nuevoParrafo = document.createElement("p");
    let texto = document.createTextNode("Parrafo creado");
    nuevoParrafo.appendChild(texto);
    document.body.appendChild(nuevoParrafo);
});



//preventDefault lo que hace es evitar la acción por defecto de un evento. Por ejemplo, si hago un programa para pintar colores en un documento y el click derecho del ratón me abre el menú contextual, puedo usar preventDefault para evitar que se abra ese menú y en su lugar pintar un color.






// Qué he aprendido del tema

// DOM Creacion
// createElement
// appendChild

// Eventos
// click / mouseover / keydown

// Manipular estilos
//  elemet.style.propiedad = valor

// clases CSS
// element.classList.add("clase") / remove / toggle / contains

// Obtener estilos CSS
// window.getComputedStyle(element).propiedad

// Estado
// let pincel = false;



// Posibles variantes del ejercicio de dibujar
/*
    🟡 1. Variante del tablero

    Te pueden cambiar cosas como:

    pintar con números en vez de colores
    contar clicks
    borrar con botón derecho
    hacer tablero 20x20 o dinámico

*/

/*
    🟡 2. Formulario + eventos

    Ejemplo:

    leer input
    validar datos
    mostrar mensaje
    input.value

*/

/*
    🟡 3. Crear elementos dinámicos

    Ejemplo:

    añadir párrafos
    crear listas
    eliminar elementos
    createElement
    removeChild
*/

/*
    🟡 4. Eventos de teclado

    Ejemplo típico:

    document.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            alert("ENTER");
        }
    });
*/

/*
    🟡 5. Modificar atributos

    Ejemplo:

    input.setAttribute("type", "password");

*/



//🟢 EJERCICIO 1 — Crear lista dinámica

/*
Crear un botón que al pulsarlo añada un elemento a una lista (ul).
El texto será: "Elemento X".
*/ 

//hmtl
/*
    <button id="btn">Añadir</button>
    <ul id="lista"></ul>
*/ 

let contador = 1;

document.getElementById("btn").addEventListener("click", function() {
    let li = document.createElement("li");
    li.textContent = "Elemento " + contador;
    
    document.getElementById("lista").appendChild(li);
    contador++;
});

// clave createElement + appendChild





//🟢 EJERCICIO 2 — Cambiar color al hacer click

/*
Al hacer click en un div, cambiar su color.
*/ 

//<div id="caja" style="width:100px;height:100px;background:red;"></div>

let caja = document.getElementById("caja");

caja.addEventListener("click", function() {
    caja.style.backgroundColor = "blue";
});

//addEventListener + style




//🟢 EJERCICIO 3 — Validar input

//Si el input está vacío, mostrar alerta.

/*
<input id="nombre">
<button id="btn">Enviar</button>
*/ 

document.getElementById("btn").addEventListener("click", function() {
    let valor = document.getElementById("nombre").value;

    if(valor === ""){
        alert("campo vacío");
    }
});





//🟢 EJERCICIO 4 — Detectar tecla ENTER

// Mostrar alerta cuando se pulse ENTER.

document.addEventListener("keydown", function(e) {
    if(e.key === "Enter"){
        alert("Has pulsado ENTER");
    }
})





//🟢 EJERCICIO 5 — Ocultar y mostrar elemento

//Un botón que oculte y muestre un texto.

/*
<p id="texto">Hola mundo</p>
<button id="btn">Mostrar/Ocultar</button>
*/ 

let visible = true;

document.getElementById("btn").addEventListener("click", function() {
    let texto = document.getElementById("texto");

    if(visible) {
        texto.style.display = "none";
    }else{
        texto.style.display = "block";
    }
    visible = !visible;
});




//🟢 EJERCICIO 6 — Eliminar elemento

// Eliminar un elemento al hacer click.

//<p id="borrar">Haz click para eliminar</p>

let parrafoo = document.getElementById("borrar");
parrafoo.addEventListener("click", function() {
    parrafoo.remove();
});



//🟢 EJERCICIO 7 — Cambiar tipo de input

// Botón para mostrar/ocultar contraseña.

/*
<input type="password" id="pass">
<button id="btn">Ver</button>
*/ 

document.getElementById("btn").addEventListener("click", function() {
    let input = document.getElementById("pass");

    if(input.type === "password") {
        input.type = "text";
    }else{
        input.type = "password";
    }
});




//🟢 EJERCICIO 8 — Cambiar clase

// Al hacer click, añadir clase "activo".
// <div id="caja"></div>

document.getElementById("caja").addEventListener("click", function() {
    this.classList.add("activo");
});





//🟢 EJERCICIO 9 — Contador de clicks
//Contar cuántas veces se pulsa un botón.

/*
<button id="btn">Click</button>
<p id="contador">0</p>
*/ 

let count = 0;
document.getElementById("btn").addEventListener("click", function() {
    count++;
    document.getElementById("contador").textContent = count;
});




//🟢 EJERCICIO 10 — Mini tablero (versión simple)

let tabla = document.createElement("table");

for (let i = 0; i < 5; i++) {
    let fila = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
        let celda = document.createElement("td");

        celda.addEventListener("click", function () {
            celda.style.backgroundColor = "black";
        });

        fila.appendChild(celda);
    }

    tabla.appendChild(fila);
}

document.body.appendChild(tabla);
