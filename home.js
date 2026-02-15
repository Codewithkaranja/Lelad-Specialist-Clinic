// home.js

const toggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

toggle?.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open ? "true" : "false");
});

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
});
