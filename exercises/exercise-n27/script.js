let isDown = false, startX, scrollLeft;
window.onload = function() {
  const sliders = document.querySelector('.items');

  sliders.addEventListener('mousedown', (e) => {
    isDown = true;
    sliders.classList.add('active');
    startX = e.pageX - sliders.offsetLeft;
    scrollLeft = sliders.scrollLeft;
  });
  sliders.addEventListener('mouseleave', () => {
    isDown = false;
    sliders.classList.remove('active');
  }); 
  sliders.addEventListener('mouseup', () => {
    isDown = false;
    sliders.classList.remove('active');
  });
  sliders.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault(); // prebiene que se seleccione el texto o comportamiento por defecto
    const last = e.pageX - sliders.offsetLeft; // pageY: valor entero en px para la
    //corrdenada X del puntero del ratón, relativo al documento entero
    console.log(last, startX);
    const walk = (last - startX) * 2; // * 2 es el doble de rapido * -- 3 es el triple
    sliders.scrollLeft = scrollLeft - walk;
  });
}