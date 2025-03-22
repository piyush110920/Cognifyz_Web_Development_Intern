// Automatic Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide) => (slide.style.display = "none"));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
}

setInterval(showSlides, 3000); // Change image every 3 seconds
showSlides(); // Initial call

// Image Gallery Enlarging Feature
function openImage(img) {
    document.getElementById("overlay-img").src = img.src;
    document.getElementById("overlay").style.display = "flex";
}

function closeImage() {
    document.getElementById("overlay").style.display = "none";
}
