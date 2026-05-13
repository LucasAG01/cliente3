const boton = document.getElementById("cargar");

const lista = document.getElementById("lista");


boton.addEventListener("click",async function() {
   
    try{
    let respuesta = await fetch("https://www.w3schools.com/xml/cd_catalog.xml")
    
    if(!respuesta.ok){
        throw new Error("error en la respuesta")
    }

    const texto = await respuesta.text();

    const parser = new DOMParser();

    const xml = parser.parseFromString(texto,"application/xml");

    const cds = xml.getElementsByTagName("CD");


    lista.innerHTML = "";

    for(let i =0;i< cds.length;i++){
        const titulo = cds[i].getElementsByTagName("TITLE")[0].textContent;
        const artista = cds[i].getElementsByTagName("ARTIST")[0].textContent;
        
        const li = document.createElement("li");

        li.textContent = titulo + " - " + artista;

        lista.appendChild(li);
    
    }


    }catch(error){
        lista.textContent = "Error carga XML"
    }   

});