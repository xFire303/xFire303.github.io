const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

function nextSlide() {
    if (screen.width < 768) {
        if (currentIndex < slides.length - 5) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }
    else {
        if (currentIndex < slides.length - 5) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }
}

function updateCarousel() {
    const offset = -currentIndex * (slideWidth + (slideWidth * 0.02)); // Aggiungi spazio al calcolo
    carousel.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 3000); // Cambia slide ogni 3 secondi