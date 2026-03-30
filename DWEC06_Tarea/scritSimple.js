window.addEventListener("DOMContentLoaded", function () {

    let zona = document.getElementById("zonadibujo");
    let paleta = document.getElementById("paleta");
    let estado = document.getElementById("pincel");

    let color = "";
    let pincel = false;

    // CREAR TABLA 30x30
    let tabla = document.createElement("table");
    tabla.className = "tablerodibujo";

    let tbody = document.createElement("tbody");

    for (let i = 0; i < 30; i++) {
        let fila = document.createElement("tr");

        for (let j = 0; j < 30; j++) {
            let celda = document.createElement("td");

            // CLICK: pinta y activa/desactiva pincel
            celda.addEventListener("click", function () {
                if (color !== "") {
                    celda.style.backgroundColor = color;
                    pincel = !pincel;
                    actualizar();
                }
            });

            // MOVER RATÓN: pinta si pincel activo
            celda.addEventListener("mouseover", function () {
                if (pincel) {
                    celda.style.backgroundColor = color;
                }
            });

            fila.appendChild(celda);
        }

        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
    zona.appendChild(tabla);

    // PALETA (solo primera fila)
    let colores = paleta.querySelectorAll("tr:first-child td");

    colores.forEach(function (c) {
        c.addEventListener("click", function () {

            colores.forEach(function (x) {
                x.classList.remove("seleccionado");
            });

            c.classList.add("seleccionado");

            color = window.getComputedStyle(c).backgroundColor;
        });
    });

    // COLOR INICIAL
    let inicio = paleta.querySelector(".seleccionado");
    if (inicio) {
        color = window.getComputedStyle(inicio).backgroundColor;
    }

    // ESTADO PINCEL
    function actualizar() {
        if (pincel) {
            estado.textContent = "PINCEL ACTIVADO";
        } else {
            estado.textContent = "PINCEL DESACTIVADO";
        }
    }

    actualizar();

});