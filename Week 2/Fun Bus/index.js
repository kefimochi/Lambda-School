//-------------------Toggling Navigation---------------------//
const navBar = document.querySelector(".toggle-bars");
let links = document.getElementById("links");

navBar.addEventListener("click", toggleNavigation);

function toggleNavigation(e) {
  links.classList.toggle("show");
}
