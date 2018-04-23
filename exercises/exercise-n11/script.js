var video, button, volume, playback, buttonSkip, buttonNext, progress, progressMain, 
buttonFullScreen, div;

window.onload = function() {
  video = document.querySelector(".js-video");
  div = document.querySelector(".player");
  button = document.querySelector('.js-button');
  volume = document.querySelector(".js-volume");
  playback = document.querySelector(".js-playback");
  buttonSkip = document.querySelectorAll('[data-skip]'); 
  progress = document.querySelector('.js-progress-filled');
  progressMain = document.querySelector('.js-progress');
  buttonFullScreen = document.querySelector('.js-full-screen');
  video.addEventListener('click', playVideo);
  video.addEventListener('timeupdate', progressVideo);
  buttonSkip.forEach(skip => skip.addEventListener('click', goSkip));

  volume.addEventListener('change', changeVolume);
  volume.addEventListener('mousemove', changeVolume);
  playback.addEventListener('change', changePlayBack);
  playback.addEventListener('mousemove', changePlayBack);
  button.addEventListener('click', playVideo);
  progressMain.addEventListener('click', clickOnProgress);
  buttonFullScreen.addEventListener('click', clickFullScreen);
}
// video.muted = true; 
// video.requestFullscreen();
// video.mozRequestFullScreen(); // Firefox
// video.webkitRequestFullscreen(); // Chrome and Safari

function playVideo(event) {
  if(video.paused) {
    video.play();
    button.innerHTML = "❚ ❚";
  } else {
    video.pause();
    button.innerHTML = "▶";
  }
  console.log("▶⏸⏯⏮🔀🎵🎶™🔔🔕©");
}

function changeVolume() {
  video.volume = this.value;
}

function changePlayBack(){
  video.playbackRate = this.value;
}

function goSkip() {
  video.currentTime += parseFloat(this.dataset.skip); // Segundos
}

function progressVideo() {
  var value = ((100/video.duration) * video.currentTime);
  progress.style.flexBasis = value + "%";
}

function clickOnProgress(event) {
  //Calculate the new time
  const time = (event.offsetX / progressMain.offsetWidth) * video.duration;

  //Update the video time
  video.currentTime = time;
}

function clickFullScreen() {
  if (video.requestFullscreen) {
    div.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    div.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    div.webkitRequestFullscreen(); // Chrome and Safari
  }
}

