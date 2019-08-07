// window.addEventListener("load", e => {
//   alert("Page loaded. Click on 'Fun Bus' logo to reload");
// });

const navLinks = document.querySelector(".nav");
navLinks.addEventListener("mouseover", event => {
  if (event.target.tagName === "A") {
    event.target.style.textShadow = "1px 3px 7px white";
    setTimeout(function() {
      event.target.style.textShadow = "none";
    }, 300);
  }
  event.preventDefault();
});

var logo = document.querySelector("#logo");
logo.addEventListener("click", e => {
  logo.setAttribute("href", "index.html");
});

let background = document.querySelector(".home");
background.addEventListener("dblclick", e => {
  background.style.background = "yellow";
});

let images = document.querySelectorAll(".img-content");

window.addEventListener("keydown", e => {
  if (e.keyCode === 65) {
    images.forEach(img => {
      img.style.transform = "rotate(180deg)";
    });
  }
});

window.addEventListener("keyup", e => {
  if (e.keyCode !== 65) {
    images.forEach(img => {
      img.style.transform = "scale(0)";
    });
  }
});

let imgBus = document.getElementById("yellow-bus");
imgBus.addEventListener("select", () => {
  console.log();
  imgBus.style.transform = `rotate(90deg)`;
});

const signUpBtn2 = document.querySelector("#btn-2");
signUpBtn2.addEventListener("mouseenter", event => {
  event.target.style.transform = "scale(2)";
});

signUpBtn2.addEventListener("mouseleave", event => {
  event.target.style.transform = "scale(1)";
});
