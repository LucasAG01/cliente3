const gameContainer = document.getElementById('game-container');
let listaLetras = new Array(); //almacenamos letras segun van a pareciendo
let intervals = []; //almacen de temporizaciones

function getRandomLetter() {
    const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

function createLetter() {
    const letter = document.createElement('div');
    letter.className = 'letter';
    letter.innerText = getRandomLetter();

    const startPosition = Math.random() * 100;
    letter.style.left = `${startPosition}vw`;

    //añade la letra al div game-container
    gameContainer.appendChild(letter);
    //añade letra a lista de letras
    listaLetras.push(letter.innerText);
    console.log(listaLetras);
    //temporización para caída de la letra
    const fallInterval = setInterval(() => {
    const position = letter.getBoundingClientRect();
      //si la posicíon de la letra (parte de abajo) es superior a la altura de la ventana
        if (position.bottom >= window.innerHeight) {
            //termino las temporizaciones
            clearAllIntervals()
            clearInterval(gameInterval);
            //muestro game over
            const gameover = document.createElement('div');
            gameover.innerText = "GAME OVER";
            gameover.className = 'gameover';
            //añade la letra al div game-container
            gameContainer.appendChild(gameover);
        } else {
          //muevo la letra 1px para abajo
            letter.style.top = `${position.top + 1}px`;
        }
    }, 10);
    //Almaceno ids de temporizacion
    intervals.push(fallInterval);
}

//función de cancelación de todas las temporizaciones
function clearAllIntervals() {
  intervals.forEach(interval => clearInterval(interval));
  intervals = [];
}

//evento de presión de tecla
document.addEventListener('keypress', (event) => {
  console.log(event.key);
  //compruebo si la pulsación se corresponde con la primera letra almacenada
  if(event.key===listaLetras[0]){
    //elimino letra de listaLetras
    listaLetras.shift();
    //elimino primera temporización almacenada
    clearInterval(intervals.shift());
    //elimino primera letra
    const allLetters = document.getElementsByClassName('letter'); //almaceno todos los div de class letter
    const lastLetter = Array.from(allLetters).shift(); //extraigo el primer div class letter
    lastLetter.remove(); //elimino el div
  }
});


const gameInterval = setInterval(createLetter, 1000);
