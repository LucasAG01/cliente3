let cuentaAtras = 5;
const mensaje = document.getElementById("mensaje");

function iniciarCuentaAtras() {
  mensaje.innerText = `Recordatorio en ${cuentaAtras} segundos...`;
  let intervalo = setInterval(() => {
    cuentaAtras--;
    mensaje.innerText = `Recordatorio en ${cuentaAtras} segundos...`;

    if (cuentaAtras <= 0) {
      clearInterval(intervalo);
      mostrarConfirm();
    }
  }, 1000);
}

function mostrarConfirm() {
  let respuesta = window.confirm("Tienes cita con el dentista. ¿Te lo sigo recordando?");
  if (respuesta === false) {
    mensaje.innerText = "Programa terminado.";
  } else {
    mensaje.innerText = "Seguir recordando.";
    cuentaAtras = 5;
    iniciarCuentaAtras();
  }
}

// Comienza la cuenta atrás inicial
iniciarCuentaAtras();