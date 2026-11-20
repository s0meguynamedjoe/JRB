const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const themeToggle = document.querySelector(".theme-toggle");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-theme");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
  }
}

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});
