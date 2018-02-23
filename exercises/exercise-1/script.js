var permitido = [65, 83, 68, 70, 71, 72, 74, 75, 76];

window.onload = function() {
  document.addEventListener('keydown', presionarTecla);
  document.addEventListener('keyup', deseleccionarTecla);
}

function presionarTecla(event) {
  const tecla = event.keyCode;

  if (permitido.indexOf(tecla) < 0) {
    return;
  }
  const button = document.querySelector(`div [data-key="${tecla}"]`);
  const sound = document.querySelector(`audio[data-key="${tecla}"]`);
  button.classList.add("playing");
  sound.currentTime = 0; // TIEMPO DE COMIENZO DEL SONIDO
  sound.play();
}

function deseleccionarTecla(event) {
  const tecla = event.keyCode;
  if (permitido.indexOf(tecla) > -1) {
    const button = document.querySelector(`div [data-key="${tecla}"]`);
    button.classList.remove("playing");
  }
}



// 97, 115, 100, 102, 103, 104, 106, 107, 108
// button.addEventListener('transitionend' deseleccionarTecla);
// console.log(event.target.nodeName);