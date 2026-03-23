const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const yearElement = document.getElementById("year");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

yearElement.textContent = new Date().getFullYear();