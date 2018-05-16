var topOfNav, nav;
window.onload = function() {
  nav = document.querySelector('#main');
  topOfNav = nav.offsetTop;

  window.addEventListener('scroll', fixNav)
}

function fixNav() {
  // console.log(topOfNav, window.scrollY);
  if(window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}