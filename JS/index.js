// NAVIGATION
const d = document;
const $navOpen = d.querySelector(".nav_hamburger");
const $navClose = d.querySelector(".close_toggle");
const $menu = d.querySelector(".nav_menu");
const $navContainer = d.querySelector(".nav_menu");

$navOpen.addEventListener("click", () => {
    $menu.classList.add("open");
    d.body.classList.add("active");
    $navContainer.style.left = "0";
    $navContainer.style.width = "30rem";
})

$navClose.addEventListener("click", () => {
    $menu.classList.remove("open");
    d.body.classList.remove("active");
    $navContainer.style.left = "-30rem";
    $navContainer.style.width = "0";
})







//AOS init
AOS.init();