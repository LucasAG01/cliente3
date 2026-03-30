Enunciado partido

1. Crear tablero 30 x 30 con DOM
2. meterlo en #zonadibujo
3. usar paleta ya hecha
4. funciona aque cambien los colores de CSS
5. Activa y desactiva pincel
6. muestra el estado en #pincel






//resumen del scriptSimple.js

🧠 Súper resumen para memorizar (modo examen)

🔹 Crear tablero
    document.createElement("table")

🔹 Seleccionar color
    color = window.getComputedStyle(celda).backgroundColor;

🔹 Pintar celda
    celda.style.backgroundColor = color;

🔹 Activar/desactivar pincel
    pincel = !pincel;

🔹 Pintar al mover ratón
    if (pincel) {
        celda.style.backgroundColor = color;
    }


🧾 CHULETA EXPRESS (5 líneas)
// color activo
color = getComputedStyle(celda).backgroundColor;

// pintar celda
celda.style.backgroundColor = color;

// activar/desactivar pincel
pincel = !pincel;

// pintar al mover ratón
if (pincel) celda.style.backgroundColor = color;
🧠 IDEA CLAVE (en tu cabeza)

👉 click = pintar + activar/desactivar
👉 mover ratón = pintar si pincel activo
👉 paleta = elegir color con getComputedStyle

🗣️ FRASE RÁPIDA (por si te quedas en blanco)

Creo una tabla 30x30 con createElement, selecciono un color de la paleta, hago click para activar el pincel y con el ratón voy pintando las celdas.