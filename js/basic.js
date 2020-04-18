// Thank you to Sam Levine for the random array code!

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let bg_images = Array.from(document.querySelectorAll('#bg_images img'));
bg_images.forEach((c) => {
  c.style.display = 'none';
  setTimeout(() => {
    c.style.width = randint(250, 500) + 'px';
    c.style.display = 'block';
    c.classList.add('bg');
  }, randint(15000, 60000));
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

//slideshow

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}