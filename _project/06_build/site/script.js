const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-site-nav]");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const yearTarget = document.querySelector("[data-current-year]");

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}
