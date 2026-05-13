// seleccionamos boton y resultado JSon
const btnJson = document.getElementById("btnJson");
const resultadoJson = document.getElementById("resultadoJson");

// Evento bont
btnJson.addEventListener("click", function () {
  async function obtenerDatos() {
    resultadoJson.innerHTML =
      "<p class='mensaje info'>Cargando usuarios...</p>"; // Mostrar mensaje de carga

    try {
      const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      if (!respuesta.ok) {
        throw new Error("Error en la respuesta: " + respuesta.status);
      }

      const usuarios = await respuesta.json(); // Convertimos la respuesta a JSON

      if (usuarios.length === 0) {
        resultadoJson.innerHTML =
          "<p class='mensaje error'>No se encontraron usuarios.</p>";
        return;
      }

      let html = "";

      usuarios.forEach((usuario) => {
        html += `
                <article class="card">
                    <h3>${usuario.name}</h3>
                    <p><strong>Email:</strong> ${usuario.email}</p>
                    <p><strong>Teléfono:</strong> ${usuario.phone}</p>
                    <p><strong>Web:</strong> ${usuario.website}</p>
                </article>
                `;
      });

      resultadoJson.innerHTML = html; // Mostrar los usuarios en el div
    } catch (error) {
      resultadoJson.innerHTML =
        "<p class='mensaje error'>Error al cargar los usuarios: " +
        error.message +
        "</p>";
      console.error("Error al obtener los usuarios:", error);
    }
  }

  obtenerDatos();
});

//Zona xml
const btnXml = document.getElementById("btnXml");
const resultadoXml = document.getElementById("resultadoXml");

btnXml.addEventListener("click", function () {
  async function obtenerDatosXml() {
    resultadoXml.innerHTML =
      "<p class='mensaje info'>Cargando datos XML...</p>"; // Mostrar mensaje de carga

    try {
      const respuesta = await fetch(
        "data/cd_catalog.xml",
      );

      if (!respuesta.ok) {
        throw new Error("Error en la respuesta: " + respuesta.status);
      }

      const texto = await respuesta.text(); // Obtenemos la respuesta como texto
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(texto, "text/xml"); // Convertimos el texto a XML

      let cds = xmlDoc.getElementsByTagName("CD"); // Obtenemos los elementos CD del XML

      let resultado = "";
      if (cds.length === 0) {
        resultadoXml.innerHTML =
          "<p class='mensaje error'>No se encontraron datos en el XML.</p>";
        return;
      }

      for (let i = 0; i < cds.length; i++) {
        let titulo = cds[i].getElementsByTagName("TITLE")[0].textContent;
        let artista = cds[i].getElementsByTagName("ARTIST")[0].textContent;
        resultado += `
                <article class="card">
                    <h3>${titulo}</h3>
                    <p><strong>Artista:</strong> ${artista}</p>
                </article>
                `;
      }

      resultadoXml.innerHTML = resultado; // Mostrar los datos en el div
    } catch (error) {
      resultadoXml.innerHTML =
        "<p class='mensaje error'>Error al cargar los datos XML: " +
        error.message +
        "</p>";
      console.error("Error al obtener los datos XML:", error);
      return;
    }
  }

  obtenerDatosXml();
});
