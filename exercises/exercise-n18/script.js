window.onload = function() {
  const timesVideos = Array.from(document.querySelectorAll('.js-videos li')).map(video => video.dataset.time);
  var minutes = getTimes(timesVideos, 0);
  var seconds = getTimes(timesVideos, 1);
  showTotal(minutes, seconds);
}

function getTimes(arrayVideos, num) {
  return arrayVideos.reduce(function(Next, Now) {
    var valueNext = isNaN(Next) ? (parseFloat(Next.split(":")[num])) : Next;
    var valueNow = isNaN(Now) ? (parseFloat(Now.split(":")[num])) : Now;
    return valueNext + valueNow;
  });
}

function showTotal(minutes, seconds) {
  var hora = 0;
  while(minutes >= 60) {
    hora += 1;
    minutes -= 60;
  }
  while(seconds >= 60) {
    minutes += 1;
    seconds -= 60;
  }
  console.log(hora + " : " + minutes + " : " + seconds);
}