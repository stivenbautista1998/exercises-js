var holes, lastHole, scoreBoard, moles, score, stopGame = false;
window.onload = function() {
  holes = document.querySelectorAll('.hole');
  scoreBoard = document.querySelector('.score');
  moles = document.querySelectorAll('.mole');

  moles.forEach(mole => mole.addEventListener('click', hitMole));
  console.log('esto si que sirve');
}

function hitMole(e) {
  if(!e.isTrusted) return; // Trampa jejeje
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(nodeholes) {
  const numHole = Math.floor(Math.random() * nodeholes.length);
  const hole = nodeholes[numHole];

  if(hole === lastHole) {
    console.log('the same');
    return randomHole(nodeholes);
  }

  lastHole = hole;
  return hole;
}


function startAll() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!stopGame) startAll();
  }, time);
};

function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  stopGame = false;
  startAll();
  setTimeout(() => stopGame = true, 10000);
}