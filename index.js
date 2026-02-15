// 1) Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// 2) Mobile toggle (ONLY ONCE)
const navbar = document.querySelector(".navbar");
const toggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  toggle.innerHTML = navbar.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// 3) Close menu when a link is clicked (optional but good UX)
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navbar.classList.remove("active");
    toggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// 4) Set footer year/date once (NOT on scroll)
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("currentDate").textContent = new Date().toLocaleDateString();
