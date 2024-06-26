
// script.js
let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (index >= slides.length) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.style.display = (i === currentSlideIndex) ? 'block' : 'none';
  });

  dots.forEach((dot, i) => {
    dot.className = dot.className.replace(" active", "");
    if (i === currentSlideIndex) {
      dot.className += " active";
    }
  });
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
  showSlide(index);
}

function startSlide() {
  slideInterval = setInterval(nextSlide, 3000);
}

function pauseSlide() {
  clearInterval(slideInterval);
}

function resumeSlide() {
  startSlide();
}

// Initialize the slider
showSlide(currentSlideIndex);
startSlide();

// Make the slider responsive
window.addEventListener('resize', () => showSlide(currentSlideIndex));
