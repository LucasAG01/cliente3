document.addEventListener('keydown', function(event) {
    const letra = event.key;

    // Solo letras alfabéticas (mayúsculas o minúsculas)
    if (/^[a-zñ]$/i.test(letra)) {
      const div = document.createElement('div');
      div.className = 'letra';
      div.innerText = letra;

      // Posición aleatoria dentro del viewport
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;

      div.style.left = `${x}px`;
      div.style.top = `${y}px`;

      document.body.appendChild(div);
    }
  });