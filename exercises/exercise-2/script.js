var divHora, divMinuto, divSegundo;

window.onload = function() {
  divHora = document.querySelector(".js-hora");
  divMinuto = document.querySelector(".js-min");
  divSegundo = document.querySelector(".js-second");

  setInterval(getHoraActual, 1000);
  getHoraActual(); // Carga instantanea
}

// 1h = 30deg

function getHoraActual () {
  var now = new Date();
  var hora = now.getHours();
  var minutos = now.getMinutes();
  var segundos = now.getSeconds();

  const secondsDegrees = ((segundos / 60) * 360) + 90; // Degrees : Grados
  divSegundo.style.transform = `rotate(${secondsDegrees}deg)`;

  const minsDegrees = ((minutos / 60) * 360) + ((segundos/60)*6) + 90;
  divMinuto.style.transform = `rotate(${minsDegrees}deg)`;

  const hourDegrees = ((hora / 12) * 360) + ((minutos/60)*30) + 90;
  divHora.style.transform = `rotate(${hourDegrees}deg)`;

  divHora.style.background = "yellow";
  divMinuto.style.background = "green";
  divSegundo.style.background = "red";
}

//console.log('Esta es la hora: ' + hora + ": " + minutos + ": " + segundos);