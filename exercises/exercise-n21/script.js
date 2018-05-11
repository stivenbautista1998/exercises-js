window.onload = function() {
  const arrow = document.querySelector('.arrow');
  const speed = document.querySelector('.speed-value');

  navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;

    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  }, (error) => {
    console.err(error);
    alert('Has cometido un error¡¡¡, actualiza y acepta el permiso para geolocalización');
  });
}