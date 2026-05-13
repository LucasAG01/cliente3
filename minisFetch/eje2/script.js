const boton = document.getElementById("cargar");
const lista = document.getElementById("lista");

boton.addEventListener("click", async function() {

    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!respuesta.ok) {
            throw new Error("Error en la respuesta");
        }

        const datos = await respuesta.json();

        lista.innerHTML = "";

        datos.forEach(function(usuario) {

            const li = document.createElement("li");

            li.textContent = usuario.name;

            lista.appendChild(li);

        });

    } catch(error) {
        lista.textContent = "ERROR";
    }

});