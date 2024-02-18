let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index < 0) {
        slideIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        slideIndex = 0;
    }

    slides.forEach(slide => slide.style.display = 'none');
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Automatic slide change
setInterval(nextSlide, 8000); // Change slide every 5 seconds
