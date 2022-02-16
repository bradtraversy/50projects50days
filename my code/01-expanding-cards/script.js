const images = document.querySelectorAll(".image");
const text = document.querySelectorAll("span");

const clickHandler = (e) => {
  images.forEach((image) => {
    image.classList.remove("active");
  });
  text.forEach((span) => {
    span.classList.remove("active-span");
  });
  e.classList.add("active");
  e.children[0].classList.add("active-span");
  console.log(e, e.children);
};
