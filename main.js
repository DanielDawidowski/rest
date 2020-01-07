document.querySelector("#date").valueAsDate = new Date();

////////////////// NAV /////////////////////

const header = document.querySelector(".row");
const sectionOne = document.querySelector("section");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-change");
    } else {
      header.classList.remove("nav-change");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

////////////////// NAV /////////////////////

//////////////// MODAL //////////////////

const addModal = document.getElementById('add-modal');
const startMenuButton = document.querySelector('.lunch__menu .menu');
const backdrop = document.getElementById('backdrop');
const closeMenuButton = addModal.querySelector('.close');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
}

const toggleMenuModal = () => {
    addModal.classList.toggle('visible');
    toggleBackdrop();
} 

const backdropClickHandler = () => {
    toggleMenuModal();
}

const closeMenuModal = () => {
    toggleMenuModal()
}

startMenuButton.addEventListener('click', toggleMenuModal);
backdrop.addEventListener('click', backdropClickHandler);
closeMenuButton.addEventListener('click', closeMenuModal);

//////////////// MODAL //////////////////

//////////////// GALLERY //////////////////

const lightBoxContainer = document.querySelector('.lightbox-big');
const lightboxImage = document.querySelector('.lightbox-img');
const counter = document.querySelector('.lightbox-counter');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const lightboxText = document.querySelector('.lightbox-text');
const lightboxItems = document.querySelector('.gallery-items').children;
let index;
let imgSrc;

for (let i = 0; i<lightboxItems.length; i++){
    lightboxItems[i].querySelector(".far").addEventListener('click',() => {
        // console.log(lightboxItems[i].querySelector('h2'))
        index=i;
        changeImage();
        lightbox();
    })
}

lightBoxContainer.addEventListener("click", (event) => {
    if(event.target !== lightboxImage && event.target !== prevButton && event.target !== nextButton) {
        lightbox()
    }
})

const next = () => {
    if(index == lightboxItems.length - 1) {
        index=0
    } else {
        index++;
    }
    changeImage();
}

const prev = () => {
    if(index == 0) {
        index = lightboxItems.length - 1;
    } else {
        index--;
    }
    changeImage()
}

const lightbox = () => {
    lightBoxContainer.classList.toggle('open');
}

const changeImage = () => {
    imgSrc = lightboxItems[index].querySelector('img').getAttribute('src');
    lightboxImage.src = imgSrc;
    counter.innerHTML = (index + 1) + " of " + lightboxItems.length;
    lightboxText.innerHTML = lightboxItems[index].querySelector('h2').innerHTML;
}


//////////////// GALLERY //////////////////

//////////////// CAROUSEL //////////////////

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__button--right');
const prevBtn = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideWidth)


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform ='translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if(targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
    } else if(targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
    } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
    }
}


// when I click left, move slides to the left
prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    // move to the next slide
    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})


// when I click right, move slides to the right

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    // move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

// when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {

    const targetDot = e.target.closest('button');

    if (!targetDot) return;
   
    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot)

    hideShowArrows(slides, prevButton, nextButton, targetIndex);
})



//////////////// CAROUSEL //////////////////





