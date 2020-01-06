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
const startMenuButton = document.querySelector('.lunch__menu button')
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






/////////////// MODAL //////////////////
