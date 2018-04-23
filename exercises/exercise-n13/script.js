var images;

window.onload = function() {
  images = document.querySelectorAll('img');
  console.log("Ready =)");

  window.addEventListener('scroll', debounce(slideImg), 500);// 30 miliseconds
}

function debounce(func, wait = 20, immediate = true) { // 20 milisegundos
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function slideImg(event) {
  //console.log(window.location.href);
  images.forEach(image => {
    // half way througt the image
    const slideImage = (window.scrollY + window.innerHeight) - image.height / 2; 
    // bottom of the image
    const imageBottom = image.offsetTop + image.height;
    
    const isImageShown = slideImage > image.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if(isImageShown && isNotScrolledPast) {
      image.classList.add('active');
    }
    else {
      image.classList.remove('active');
    }
  });
}