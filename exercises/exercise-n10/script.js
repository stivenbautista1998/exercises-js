var checks;
window.onload = function() {
  checks = document.querySelectorAll(".js-checkbox");
  checks.forEach(check => check.addEventListener('click', selectChecks));
}

let direction = false;
let lastCheck;

function selectChecks(event) {
  if((event.shiftKey) && (lastCheck != this)) {
    var now = this;

    checks.forEach(check => {
      if((check === now) || (check === lastCheck)){
        direction = !direction;
      }

      if(direction){
        check.checked = true;
      }
    });
  }

  lastCheck = this;
}



