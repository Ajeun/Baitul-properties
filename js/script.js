// Slideshow Start ------------------------------------------------
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
        slide.style.transition = 'opacity 2s ease-in-out'; // Smooth fade effect
    });
}

function startSlideshow() {
    showSlide(currentIndex);
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide
        showSlide(currentIndex);
    }, 4000); // Change slide every 5 seconds
}

// Initialize the slideshow
startSlideshow();

// Slideshow End -------------------------------------------------