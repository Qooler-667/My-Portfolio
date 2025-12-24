const burgerOpenBtn = document.querySelector(".header__burger");
const burgerWrapper = document.querySelector(".burger__menu-wrapper");
const burgerMenu = document.querySelector(".burger-menu");
const burgerExitBtn = document.querySelector(".burger__exit");

function openBurger() {
  burgerWrapper.classList.add("burger__menu-wrapper--open");
}

function closeBurger() {
  burgerWrapper.classList.remove("burger__menu-wrapper--open");
}

burgerOpenBtn.addEventListener("click", openBurger);

burgerExitBtn.addEventListener("click", closeBurger);

burgerWrapper.addEventListener("click", (event) => {
  if (!burgerMenu.contains(event.target)) {
    closeBurger();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeBurger();
  }
});
document.querySelectorAll(".burger__menu-list a").forEach((link) => {
  link.addEventListener("click", closeBurger);
});
// ----------------- Filter-cards-btn ------------------

// ----------------- theme ------------------
const themeBtn = document.querySelector(".page-theme");
const body = document.body;

if (localStorage.theme === "dark") {
  body.classList.add("dark");
}

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.theme = body.classList.contains("dark") ? "dark" : "light";
});

// ----------------- language ------------------
document.getElementById("checkbox").addEventListener("change", (e) => {
  const lang = e.target.checked ? "en" : "ru";
  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.style.display = el.dataset.lang === lang ? "" : "none";
  });
  localStorage.setItem("lang", lang);
});

const saved = localStorage.getItem("lang") || "ru";
document.getElementById("checkbox").checked = saved === "en";
document.querySelectorAll("[data-lang]").forEach((el) => {
  el.style.display = el.dataset.lang === saved ? "" : "none";
});
