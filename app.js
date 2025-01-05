//Image Slider
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

const colors = document.querySelector('.colors');

colors.addEventListener('click', (event) => {
    const clickedDiv = event.target;

    if (clickedDiv.classList.contains('black')) {
        img1.src = 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        img2.src = 'https://images.unsplash.com/photo-1505740106531-4243f3831c78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else if (clickedDiv.classList.contains('beige')) {
        img1.src = 'https://plus.unsplash.com/premium_photo-1679513691485-711d030f7e94?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        img2.src = 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    }
});



document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
    }
}

function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove('displaySlide');
    });
    slides[slideIndex].classList.add('displaySlide');
}
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);

}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}