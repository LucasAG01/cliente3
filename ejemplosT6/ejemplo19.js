// Temporizador para eliminar el primer enlace después de 5 segundos
setTimeout(()=>{
  var enlace1 = document.getElementById("enlace1");
  if (enlace1) {
    enlace1.remove();
    console.log("Primer enlace eliminado.");
    setTimeout(()=>{
      var enlace2 = document.getElementById("enlace2");
      if (enlace2) {
        enlace2.remove();
        console.log("Segundo enlace eliminado.");
      }
    }, 10000);
  }
}, 5000);
