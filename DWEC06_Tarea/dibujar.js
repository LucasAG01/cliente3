window.addEventListener("DOMContentLoaded", function () {
    let zonaDibujo = document.getElementById("zonadibujo");
    let paleta = document.getElementById("paleta");
    let mensajePincel = document.getElementById("pincel");

    let colorActivo = "";
    let pincelActivo = false;

    // Crear tabla 30x30
    let tabla = document.createElement("table");
    tabla.className = "tablerodibujo";

    let tbody = document.createElement("tbody");

    for (let i = 0; i < 30; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 30; j++) {
            let celda = document.createElement("td");

            // Click en una celda: pinta y activa/desactiva el pincel
            celda.addEventListener("click", function () {
                if (colorActivo !== "") {
                    celda.style.backgroundColor = colorActivo;
                    pincelActivo = !pincelActivo;
                    actualizarEstadoPincel();
                }
            });

            // Si el pincel está activo, al pasar el ratón pinta
            celda.addEventListener("mouseover", function () {
                if (pincelActivo && colorActivo !== "") {
                    celda.style.backgroundColor = colorActivo;
                }
            });

            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
    zonaDibujo.appendChild(tabla);

    // Seleccionar solo los colores de la primera fila de la paleta
    let celdasPaleta = paleta.querySelectorAll("tr:first-child td");

    celdasPaleta.forEach(function (celdaColor) {
        celdaColor.addEventListener("click", function () {
            // Quitar la selección anterior
            celdasPaleta.forEach(function (celda) {
                celda.classList.remove("seleccionado");
            });

            // Seleccionar el color actual
            celdaColor.classList.add("seleccionado");

            // Guardar el color activo desde CSS
            colorActivo = window.getComputedStyle(celdaColor).backgroundColor;
        });
    });

    // Color inicial
    let colorInicial = paleta.querySelector(".seleccionado");
    if (colorInicial) {
        colorActivo = window.getComputedStyle(colorInicial).backgroundColor;
    }

    // Mostrar estado del pincel
    function actualizarEstadoPincel() {
        if (pincelActivo) {
            mensajePincel.textContent = "PINCEL ACTIVADO";
        } else {
            mensajePincel.textContent = "PINCEL DESACTIVADO";
        }
    }

    actualizarEstadoPincel();
});