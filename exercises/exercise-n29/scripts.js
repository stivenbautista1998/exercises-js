let countdown, timeDisplay, endTime, buttons;

window.onload = function() {
  timeDisplay = document.querySelector('.display__time-left');
  endTime = document.querySelector('.display__end-time');
  buttons = document.querySelectorAll('[data-time]');
  
  buttons.forEach(button => button.addEventListener('click', startTime));

  document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const min = this.minutes.value;
    timer(min * 60);
    this.reset();
  });
}

function startTime() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function timer(seconds) {
  // limpiar los temporisadores existentes
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000
  displayTime(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft <= 0) {
      clearInterval(countdown);
      return;
    }

    displayTime(secondsLeft);
  }, 1000);
}

function displayTime(sec) {
  const minutes = Math.floor(sec / 60);
  const remainderSeconds = sec % 60;
  const contentDisplay = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  timeDisplay.textContent = contentDisplay;
  document.title = contentDisplay;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = 
  `Be back At: ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}
