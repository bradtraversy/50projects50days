const body = document.getElementsByTagName("body")[0];
const openBars = document.getElementById("open");
const closeBars = document.getElementById("close");

function openMenu() {
  body.classList.add("active");
  openBars.classList.add("open-active");
  closeBars.classList.add("close-active");
}

function closeMenu() {
  body.classList.remove("active");
  openBars.classList.remove("open-active");
  closeBars.classList.remove("close-active");
}
