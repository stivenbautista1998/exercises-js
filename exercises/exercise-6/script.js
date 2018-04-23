// Mejor forma de hacerlo -------------------------

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var searchInput, suggestions, ul;

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi'); // Las expresiones regulares se utilizan 
    // para realizar funciones de coincidencia de patrones y "buscar y reemplazar" en el texto.
    return place.city.match(regex) || place.state.match(regex)
  }); 
}

// i: es un modificador (modifica la búsqueda para que no distinga entre mayúsculas y minúsculas).
// g: Realice una coincidencia global (encuentre todas las coincidencias en lugar de detenerse 
// después de la primera coincidencia).

// El método match () busca en una cadena una coincidencia con una expresión regular y devuelve 
// las coincidencias como un objeto Array.

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function clear() {  // Lo hice yo =)
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function base() { // Lo hice yo =)
  var listas = `<li>Filter for a city</li>` + `<li>or a state</li>`;
  ul.innerHTML = listas;
}

function displayMatches() {
  if(this.value != "") {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  } else {
      clear();
      base();
  }
}

window.onload = function() {
  ul = document.querySelector('.js-nav');
  searchInput = document.querySelector('.search');
  suggestions = document.querySelector('.suggestions');

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', displayMatches);
}

// ----------------------------------------------------------------



// Mi Forma ---------------------------------------------

/*
var input, ul, datos;

//  se debe almacenar la URL del JSON que se quiere recuperar en una variable
const requestURL = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

Para crear una solicitud, se necesita crear una nueva instancia de objeto de solicitud desde 
el constructorXMLHttpRequest 
var request = new XMLHttpRequest();

// Ahora es necesario abrir una nueva solicitud utilizando el método open()
request.open('GET', requestURL);
Datos necesarios:
El método HTTP a usar cuando se hace una solicitud en red. 
En este caso GET es adecuado, dado que sólo se estan recuperando algunos datos simples.
La URL a la que se realiza la solicitud — esta es la URL del archivo que se almacenó antes.


acá se está programando el responseType al JSON, de esta forma ese XHR sabe que el servidor 
estará retornando JSON 
request.responseType = 'json';

// Entonces se envía la solicitud con el método send():
request.send();


La última parte de esta sección comprende la espera por la respuesta a retornar desde el servidor 
y luego, manejarla 
request.onload = function() {
  datos = request.response; //  se está almacenando la respuesta a la solicitud (propiedad response)
  //console.log(datos);  esta variable ahora contendrá el objeto JavaScript basado en el JSON
  
  //populateHeader(superHeroes);
  //showHeroes(superHeroes);
}


window.onload = function() {
  input = document.querySelector('.js-input');
  input.focus();
  input.addEventListener('input', cambiar);
  input.addEventListener('keyup', cambiar);

  ul = document.querySelector('.js-nav');
}

function cambiar() {
  var now = input.value
  now = now.toUpperCase();

  if(now != "") {
    var result = filtro(now);
    console.table(result);

    clear();
    addField(result, now);
  } else {
    clear();
    base();
  }
  
}

function filtro(now) {
  if(now != "") {
    return datos.filter(item => ((item.city.toUpperCase().indexOf(now) > -1) || (item.state.toUpperCase().indexOf(now) > -1) ));
  }
  else {
    return null;
  }
}

function addField(number, word) {
  for(item in number) {
    var li = document.createElement("li");
    var span_1  = document.createElement("span");
    var span_2  = document.createElement("span");
    span_1.appendChild(document.createTextNode(number[item].city + ", " + number[item].state));
    var format = numberWithCommas(number[item].population);

    span_2.appendChild(document.createTextNode(format));
    //span_1.classList.add('name');
    span_2.classList.add('population');
    li.appendChild(span_1);
    li.appendChild(span_2);

    ul.appendChild(li);
  }
}

function clear() {  
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function base() { // Lo hice yo =)
  var listas = `<li>Filter for a city</li>` + `<li>or a state</li>`;
  ul.innerHTML = listas;
}

*/


/*
var myJSON = { "name": "Chris", "age": "38" };
console.log(myJSON);
var myString = JSON.stringify(myJSON);
console.log(myString);

En este caso, se ha creado un objeto JavaScript, luego se comprueba lo que contiene, y entonces 
se convierte en una cadena JSON utilizando stringify() — guardando el valor retornado en una 
variable nueva  — y comprobándolo nuevamente.
*/

// parse(): Acepta una cadena JSON como parámetro, y devuelve el objeto JavaScript correspondiente.
// stringify(): Acepta un objeto como parámetro, y devuelve la forma de cadena JSON equivalente.

/*
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // agrega comas en los decimales
}
*/

/*
const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));

*/


// ----------------------------------------------------------------











