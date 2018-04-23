// Mejor forma de hacerlo -------------------------
window.onload = function() {
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
}

// --------------------------------------------------




// Mi forma de hacerlo -----------------------------
// var inputSpacing, inputBlur, inputColor, img;

// window.onload = function() {
//   inputSpacing = document.getElementById("spacing");
//   inputBlur = document.getElementById("blur");
//   inputColor = document.getElementById("base");
//   img = document.getElementById("image");

//   inputSpacing.addEventListener('change', cambiarSpacing);
//   inputSpacing.addEventListener('mousemove', cambiarSpacing);

//   inputBlur.addEventListener('change', cambiarBlur);
//   inputBlur.addEventListener('mousemove', cambiarBlur);

//   inputColor.addEventListener('change', cambiarImage);
// }


// function cambiarSpacing(event) {
//   if(inputSpacing.type === "range") {
//     img.style.setProperty('--spacing', inputSpacing.value + 'px'); // funcion que modifica una propiedad
//   }
// }

// function cambiarBlur(event) {
//   if(inputBlur.type === "range") {
//     img.style.setProperty('--blur', inputBlur.value + 'px');
//   }
// }

// function cambiarImage (event) {
//   if(inputColor.type === "color") {
//     img.style.setProperty('--base', inputColor.value);
//   }
// }
// --------------------------------------------------