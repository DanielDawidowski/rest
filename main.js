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
