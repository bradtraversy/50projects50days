let currentSlide = 4;

const descriptions = document.querySelector(".left");
const pictures = document.querySelector(".right");

const upButton = document.getElementById("up");
const downButton = document.getElementById("down");

upButton.addEventListener("click", upSlide);
downButton.addEventListener("click", downSlide);

function upSlide() {
  currentSlide--;

  if (currentSlide === 0) {
    descriptions.style.transform = "translateY(-300vh)";
    pictures.style.transform = "translateY(0)";
    currentSlide = 4;
  } else {
    descriptions.style.transform = `translateY(-${(currentSlide - 1) * 100}vh)`;
    pictures.style.transform = `translateY(-${(4 - currentSlide) * 100}vh)`;
  }
}

function downSlide() {
  currentSlide++;

  if (currentSlide === 5) {
    descriptions.style.transform = "translateY(0)";
    pictures.style.transform = "translateY(-300vh)";
    currentSlide = 1;
  } else {
    descriptions.style.transform = `translateY(-${(currentSlide - 1) * 100}vh)`;
    pictures.style.transform = `translateY(-${(4 - currentSlide) * 100}vh)`;
  }
}
