var campos;

window.onload = function() {
  campos = document.querySelectorAll('.js-item');
  campos.forEach(campo => campo.addEventListener('click', toggleOpen));
  campos.forEach(campo => campo.addEventListener('transitionend', toggleActive));
}


function toggleOpen(event) {
  this.classList.toggle('open');
  // si la clase existe la elimina y devuelve false, si no, la añade y devuelve true.
}

function toggleActive(event) {
  console.log(event);
  if(event.propertyName.includes('flex')) {
    // alert('exito');
    this.classList.toggle('active');
  }
}


// window.onload = function() {
//   campos = document.querySelectorAll('.js-item');
//   campos.forEach(campo => campo.addEventListener('click', realiar));
// }

// function realiar(event) {
//   var cantidad  = this.classList.length;
//   if(cantidad == 3) {
//     this.classList.add('active');
//     this.classList.add('open');
//   } else {
//     this.classList.remove('active');
//     this.classList.remove('open');
//   }
// }