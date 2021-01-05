const navbar = document.querySelector(".navigation-bar");
const sticky = navbar.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", stickyNavBar);
