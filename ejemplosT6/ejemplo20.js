function recordar() {
  let respuesta = window.confirm("Tienes cita con el dentista. ¿Te lo sigo recordando?");
  if (respuesta === false) {
    console.log("Programa terminado.");
  } else {
    console.log("Seguir recordando.");
    window.setTimeout(recordar, 5000); // Esperar 5 segundos y volver a preguntar
  }
}

// Primera espera de 5 segundos antes de preguntar
window.setTimeout(recordar, 5000);