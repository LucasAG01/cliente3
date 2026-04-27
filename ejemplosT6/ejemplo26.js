let formulario = document.forms[0];
let errores = document.getElementById("errores");

formulario.addEventListener("submit", (evento) => {
  let nombre = formulario.elements["nombre"].value.trim();
  let correo = formulario.elements["correo"].value.trim();
  let mensajesError = [];

  if (nombre === "") {
    mensajesError.push("El nombre no puede estar vacío.");
  }

  if (!correo.includes("@")) {
    mensajesError.push("El correo debe contener '@'.");
  }

  if (mensajesError.length > 0) {
    evento.preventDefault();
    errores.innerHTML = mensajesError.join("<br>");
  }
});