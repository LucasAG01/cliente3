let sumas = [];
let juegoActivo = true;

function generarSuma() {
  if (!juegoActivo) return;

  let num1, num2, resultado;

  do {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    resultado = num1 + num2;
  } while (resultado > 9);

  const suma = document.createElement("div");

  suma.textContent = `${num1} + ${num2} = ?`;
  suma.className = "suma";

  suma.style.left = Math.random() * (window.innerWidth - 80) + "px";
  suma.style.top = "0px";

  document.body.appendChild(suma);

  const objetoSuma = {
    elemento: suma,
    resultado: resultado,
    y: 0,
    intervalo: null
  };

  sumas.push(objetoSuma);

  objetoSuma.intervalo = setInterval(() => {
    objetoSuma.y += 1;
    objetoSuma.elemento.style.top = objetoSuma.y + "px";

    if (objetoSuma.y + objetoSuma.elemento.offsetHeight >= window.innerHeight) {
      terminarJuego();
    }
  }, 10);
}

function terminarJuego() {
  juegoActivo = false;

  sumas.forEach(function(objeto) {
    clearInterval(objeto.intervalo);
  });

  document.getElementById("gameover").style.display = "block";
}

setInterval(generarSuma, 1000);