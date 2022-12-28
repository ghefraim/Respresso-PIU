window.onscroll = function() {stickify()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickify() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("load", function() {
  window.scrollBy(0, 1);
});

const popup = document.querySelector(".popup");
const navlinks = document.querySelector(".nav-links");
const navbtn = document.querySelector(".nav-btn").addEventListener("click", function() {
    if(popup.style.display == "none" || !popup.style.display) {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
});