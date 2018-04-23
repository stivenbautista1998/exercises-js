var hero, h1;
const walk = 500;
window.onload = function() {
  hero = document.querySelector(".js-hero");
  text = hero
  h1 = hero.querySelector("h1");

  hero.addEventListener('mousemove', moveShadow);
}

function moveShadow(event) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = event;

  if(this !== event.target) {
    x = x + event.target.offsetLeft;
    y = y + event.target.offsetTop;
  } 

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  console.log(xWalk, yWalk);
  h1.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.9), 
    ${xWalk * -1}px ${yWalk}px 0 rgba(200, 50, 50, 0.9),
    ${yWalk}px ${xWalk}px 0 rgba(61, 217, 158, 1),
    ${xWalk}px ${yWalk * -1}px 0 rgba(61, 195, 217, 1)`;
}
