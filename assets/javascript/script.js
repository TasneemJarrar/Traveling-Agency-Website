const header = document.querySelector(".navbar");
console.log(header);
const heroSection = document.querySelector(".hero");
console.log(heroSection);

const headerHeight = header.offsetHeight;

window.onscroll = function () {
  if (window.scrollY >= headerHeight) {
    header.classList.add("header_scroll");
    header.classList.remove("pt-5");
  } else {
    header.classList.remove("header_scroll");
    header.classList.add("pt-5");
    
  }
};

