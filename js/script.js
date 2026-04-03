const div = document.getElementById("contact");
const btn = document.getElementById("btn__contact");

btn.addEventListener("click", () => {
  const varti = div.style.opacity === "1";

  div.style.opacity = varti ? "0" : "1";
  div.style.bottom = varti ? "30px" : "80px";
});
btn.addEventListener("click", () => {
  btn.classList.toggle("active");
});

const html = document.documentElement;
const btnTheme = document.getElementById("btn__theme");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

btnTheme.addEventListener("click", () => {
  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
    sun.style.transform = "translate(-215%, -50%)";
    moon.style.transform = "translate(-50%, -50%)";
    moon.style.opacity = "1";
    sun.style.opacity = "0";
  } else {
    html.dataset.theme = "dark";
    sun.style.transform = "translate(-50%, -50%)";
    moon.style.transform = "translate(120%, -50%)";
    moon.style.opacity = "0";
    sun.style.opacity = "1";
  }
});

const btnMenu = document.getElementById("btn__menu");
const content = document.getElementById("content");

btnMenu.addEventListener("click", () => {
  content.classList.toggle("active");
});
