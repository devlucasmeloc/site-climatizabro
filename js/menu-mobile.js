let btnMobile = document.querySelector(".btn-mobile");
let todosOsLinks = document.querySelectorAll(".menu-link");

function toggleMenu(event) {
    let nav = document.querySelector(".nav");
    nav.classList.toggle("active");
}
btnMobile.addEventListener("click", toggleMenu);
todosOsLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
})
