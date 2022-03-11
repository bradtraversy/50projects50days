const nav = document.getElementById("nav");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
