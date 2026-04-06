
//Peticion JSON
/*	
0:
id  1
name	"Leanne Graham"
username	"Bret"
email	"Sincere@april.biz"
--address	
street	"Kulas Light"
suite	"Apt. 556"
city	"Gwenborough"
zipcode	"92998-3874"
---geo	
lat	"-37.3159"
lng	"81.1496"
phone	"1-770-736-8031 x56442"
website	"hildegard.org"
--company	
name	"Romaguera-Crona"
catchPhrase	"Multi-layered client-server neural-net"
bs	"harness real-time e-markets"
*/

let peticion = new XMLHttpRequest();

peticion.open("GET", "https://jsonplaceholder.typicode.com/users", true);
peticion.send();

peticion.addEventListener("load", function() {
    let datos  = peticion.responseText; // Obtenemos la respuesta como texto
    let usuarios = JSON.parse(datos); // Convertimos el texto JSON a un objeto JavaScript

    let resultado = "";

    usuarios.forEach(element => {
        resultado += element.name + " - " + element.email + "<br>";

    });
    document.getElementById("resultado").innerHTML = resultado;
});



//Peticion XML
/*
<CATALOG>
<CD>
<TITLE>Empire Burlesque</TITLE>
<ARTIST>Bob Dylan</ARTIST>
<COUNTRY>USA</COUNTRY>
<COMPANY>Columbia</COMPANY>
<PRICE>10.90</PRICE>
<YEAR>1985</YEAR>
</CD>
</CATALOG>
*/

let peticionXML = new XMLHttpRequest();
peticionXML.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml", true);
peticionXML.send();


peticionXML.addEventListener("load", function() {
    let datos = peticionXML.responseXML; // Obtenemos la respuesta como XML

    let cds = datos.documentElement.getElementsByTagName("CD");

    let resultado = "";

    for (let i = 0; i < cds.length; i++) {
        let titulo = cds[i].getElementsByTagName("TITLE")[0].textContent;
        let artista = cds[i].getElementsByTagName("ARTIST")[0].textContent;
        resultado += titulo + " - " + artista + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
});





//Query para JSON

$(document).ready(function() {

    $.get("https://jsonplaceholder.typicode.com/users", function(datos) {
        let resultado = "";
        datos.forEach(element => {
            resultado += element.name + " - " + element.email + "<br>";
        });
        $("#resultado").html(resultado);
    }
    );  

});



//Query para XML
$(document).ready(function() {

    $.get("https://www.w3schools.com/xml/cd_catalog.xml", function(datos) {
        let resultado = "";
        $(datos).find("CD").each(function() {
            let titulo = $(this).find("TITLE").text();
            let artista = $(this).find("ARTIST").text();
            resultado += titulo + " - " + artista + "<br>";
        });
        $("#resultado").html(resultado);
    });  

});
