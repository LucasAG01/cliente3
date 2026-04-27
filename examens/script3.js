//EMpezamos solo con variables
let sumas = [];
let juegoActivo = true;

function generarSuma() {
  let num1, num2, resultado;

  do {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    resultado = num1 + num2;
  } while (resultado > 9);

  const suma = document.createElement("div");

  suma.textContent = `${num1} + ${num2} = ?`;

  suma.className = "suma";

  suma.style.left = Math.random() * window.innerWidth + "px";
  suma.style.top = "0px";

  sumas.push({ elemento: suma, resultado: resultado, y: 0 });

  document.body.appendChild(suma);

  const objetoSuma ={
    elemento: suma,
    resultado: resultado,
    y: 0
  };

    sumas.push(objetoSuma);

    // movimient
    const intervalo = setInterval(() => {
        objetoSuma.y +=1;
        objetoSuma.elemento.style.top = objetoSuma.y + "px";


        if (objetoSuma.y > window.innerHeight ) {
            // Eliminar la suma del DOM
            //game over
        }
    }, 10);



}


