var itemsList, items = JSON.parse(localStorage.getItem('items')) || [];

window.onload = function() {
  var addItems = document.querySelector('.add-items');
  var buttonLost = document.querySelector('.js-button-lost');
  itemsList = document.querySelector('.plates');
  loadItems(items, itemsList);
  addItems.addEventListener('submit', addAllItems);
  itemsList.addEventListener('click', checkMenuClick);
  buttonLost.addEventListener('click', eliminarList);
}

function addAllItems(e) { // Aqui es usaso el "event delegation".
  console.log(this.item.value);
 
  if(this.item.value != "") {
    items.push({name : this.item.value, select : false});
    loadItems(items, itemsList);
    ((window.Storage) ? localStorage.setItem("items", JSON.stringify(items)) : console.log("El navegador no soporta Storage"));
    this.reset(); // resetear input
    e.preventDefault(); // Evito que se recargue la pagina
  } 
}

function checkMenuClick(e) {
  if(!e.target.matches('input')) return; // Omita esto si es una entrada
  var index = e.target.dataset.index; // Asi se obtiene un dataset
  items[index].select = !items[index].select;
  loadItems(items, itemsList);
  ((window.Storage) ? localStorage.setItem("items", JSON.stringify(items)) : console.log("El navegador no soporta Storage"));
}

// if (typeof(Storage) !== "undefined"): typeof(operando) = devuelve una cadena que indica el tipo del operando 
// if(ListItems.lastChild.nodeName == "#text"): nodeName = nombre del nodo
// var parent = e.target.parentNode;  Obtiene al padre del nodo

function loadItems(value = [], ListItems) {
  ListItems.innerHTML = value.map((item, cont) => {
    return `<li>
              <input type="checkbox" value="${item.name}" id="item${cont}" data-index="${cont}" ${item.select ? 'checked' : ''} />
              <label for=item${cont}>${item.name}</label>
            </li>`;
  }).join('');
}

function eliminarList() {
  localStorage.removeItem("items");
  items = [];
  loadItems(items, itemsList);
}