document.querySelector("#date").valueAsDate = new Date();


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
       