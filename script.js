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

const photoAlbum = document.querySelector("[data-photo-album]");
const previousAlbumButton = document.querySelector("[data-album-prev]");
const nextAlbumButton = document.querySelector("[data-album-next]");

if (photoAlbum && previousAlbumButton && nextAlbumButton) {
  const scrollAlbum = (direction) => {
    const card = photoAlbum.querySelector("figure");
    const distance = card ? card.getBoundingClientRect().width + 16 : 360;
    photoAlbum.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  previousAlbumButton.addEventListener("click", () => scrollAlbum(-1));
  nextAlbumButton.addEventListener("click", () => scrollAlbum(1));
}

const resumeDownload = document.querySelector("#resume-download");

if (resumeDownload) {
  resumeDownload.addEventListener("click", () => {
    if (typeof window.umami?.track === "function") {
      window.umami.track("Resume Download");
    } else if (typeof window.plausible === "function") {
      window.plausible("Resume Download");
    }
  });
}
