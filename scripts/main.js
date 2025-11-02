const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
document.addEventListener('click', () => {
    navLinks.classList.toggle("active");
})