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

btnTheme.addEventListener("click", () => {
  const icon = btnTheme.querySelector("i");
  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
    icon.className = "fa-solid fa-moon";
  } else {
    html.dataset.theme = "dark";
    icon.className = "fa-solid fa-sun";
  }
});

const btnMenu = document.getElementById("btn__menu");
const content = document.getElementById("content");

btnMenu.addEventListener("click", () => {
  content.classList.toggle("active");
});
