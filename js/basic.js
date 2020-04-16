// Thank you to Sam Levine for this code!

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
  }, randint(1000, 10000));
});