const boton = document.getElementById("cargar");

const contenedor = document.getElementById("contenedor");


boton.addEventListener("click",async function() {
   
    try{                            
                                    // "cd_catalog.xml"
    let respuesta = await fetch("https://www.w3schools.com/xml/cd_catalog.xml")
    
    if(!respuesta.ok){
        throw new Error("error en la respuesta")
    }

    const texto = await respuesta.text();

    const parser = new DOMParser();

    const xml = parser.parseFromString(texto,"application/xml");

    const cds = xml.getElementsByTagName("CD");


    contenedor.innerHTML="";

    for(let i =0;i< cds.length;i++){
        const titulo = cds[i].getElementsByTagName("TITLE")[0].textContent;
        const artista = cds[i].getElementsByTagName("ARTIST")[0].textContent;
        

        const tarjeta = document.createElement("div");

        tarjeta.className="tarjeta";

        tarjeta.innerHTML =`
                <h3>${titulo}</h3>
                <p><strong>Artista:</strong> ${artista}</p>
                
        `;

        contenedor.appendChild(tarjeta);
       
    
    }


    }catch(error){
        contenedor.textContent = "Error carga XML"
    }   

});