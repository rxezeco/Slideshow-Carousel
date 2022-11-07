

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel-list');
const totalSlides = slides.length;

// console.log(totalSlides);


document.
getElementById('next')
.addEventListener("click", function() {
    moveToNextSlide();
});

document.
getElementById('prev')
.addEventListener("click", function() {
    moveToPrevSlide();
});

function updateSlidePosition(){
    for (let slide of slides) {
    slide.classList.remove('carousel-list--visible');
    slide.classList.add('carousel-list--hidden');
    }
    slides[slidePosition].classList.add('carousel-list--visible');
}

function moveToNextSlide() {
    
 if (slidePosition == totalSlides - 1) {
slidePosition = 0;
}else{
    slidePosition++;
}
updateSlidePosition();
}

function moveToPrevSlide() {
    
if (slidePosition == 0){
    slidePosition = totalSlides - 1;
}else {
    slidePosition--;
}
updateSlidePosition();
}