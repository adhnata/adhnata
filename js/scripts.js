const navToggle = document.querySelector(".nav‑toggle");
const siteNav   = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  siteNav.classList.toggle("show");
  navToggle.classList.toggle("open");
});
