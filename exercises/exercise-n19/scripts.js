var video, canvas, ctx, strip, snap;
window.onload = function() {
  video = document.querySelector('.player');
  canvas = document.querySelector('.photo');
  ctx = canvas.getContext('2d');
  strip = document.querySelector('.strip');
  snap = document.querySelector('.snap');

  getVideo();
  video.addEventListener('canplay', paintToCanvas);
}

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false}).then(localMediaStream => {
    console.log(localMediaStream);
    video.srcObject = localMediaStream;
    //video.src = URL.createObjectURL(localMediaStream);
    video.play();

  }).catch( error => {
    console.error('Hay un error¡¡¡', error);
  });
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  console.log(data);

  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('Download', 'handsome');
  //link.textContent = "Download Image";
  link.innerHTML = `<img src="${data}" alt="Esta es una foto">`;
  strip.insertBefore(link, strip.firstChild);
}


function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  console.log(width, height);
  canvas.height = height;
  canvas.width = width;

  return setInterval( () => {
    ctx.drawImage(video, 0, 0, width, height);
    const pixel = ctx.getImageData(0, 0, width, height);
    // mess with them
    // pixels = redEffect(pixels);

    pixels = rgbSplit(pixels);
    // ctx.globalAlpha = 0.8;

    // pixels = greenScreen(pixels);
    // put them back
    ctx.putImageData(pixels, 0, 0);
    //debugger;
  }, 16);
}
