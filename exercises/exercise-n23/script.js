var voicesDropdown, msg, voices = [];

window.onload = function() {
  msg = new SpeechSynthesisUtterance();
  voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');

  msg.text = document.querySelector('[name=text]').value;

  speechSynthesis.addEventListener('voiceschanged', selectOptions); // speechSynthesis objeto especial
  voicesDropdown.addEventListener('change', setVoice);
  speakButton.addEventListener('click', toggle);
  stopButton.addEventListener('click', () => toggle(false)); // (toggle.bind(null, false)
  options.forEach(option => option.addEventListener('change', setOptions));
}

function selectOptions() {
  voices = this.getVoices();

  voicesDropdown.innerHTML = voices
  .filter(voice => voice.lang.includes('es') || voice.lang.includes('ja') || voice.lang.includes('en'))
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join('');
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if(startOver) {
    speechSynthesis.speak(msg);
  }
}

function setOptions() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
  toggle();
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle();
}