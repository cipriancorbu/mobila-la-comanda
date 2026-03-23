const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll("#nav-links a");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const yearElement = document.getElementById("year");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

yearElement.textContent = new Date().getFullYear();