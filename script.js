// Script to toggle the mobile navigation menu
function toggleNav() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active");
}
const heroButton = document.querySelector(".hero-button");
heroButton.addEventListener("click", function() {
    console.log("Button clicked!");
});
const features = document.querySelectorAll(".feature");
features.forEach(function(feature) {
    feature.addEventListener("mouseenter", function() {
            feature.style.backgroundColor = "lightgray";
    });
    feature.addEventListener("mouseleave", function() {
            feature.style.backgroundColor = "white";
    });
});