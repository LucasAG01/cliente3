let peticion = new XMLHttpRequest();

peticion.open("GET", "https://www.w3schools.com/xml/cd_catalog.xml", true);

peticion.send();

peticion.addEventListener("load", function() {
    let datos = peticion.responseXML; // Obtenemos la respuesta como XML

    let cds = datos.responseXML.documentElement.getElementsByTagName("CD");

    let resultado = "";

    for (let i = 0; i < cds.length; i++) {
        let titulo = cds[i].getElementsByTagName("TITLE")[0].textContent;
        let artista = cds[i].getElementsByTagName("ARTIST")[0].textContent;
        resultado += titulo + " - " + artista + "<br>";
    }
    document.getElementById("resultado").innerHTML = resultado;
});