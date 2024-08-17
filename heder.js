const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const navLinks = document.querySelectorAll(".mobile-menu nav ul li a");
const desktopNav = document.querySelector(".desktop-nav");

// Відкриття мобільного меню
burgerMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// Закриття мобільного меню
closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Закриття мобільного меню при натисканні на навігаційне посилання
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

// Плавна анімація для навігації на десктопах і планшетах
burgerMenu.addEventListener("click", () => {
  desktopNav.classList.toggle("active");
});
