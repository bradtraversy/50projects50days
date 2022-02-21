const sliders = document.querySelectorAll(".slider");

window.addEventListener("scroll", slideIn);

slideIn();

function slideIn() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  sliders.forEach((slider) => {
    const sliderTop = slider.getBoundingClientRect().top;

    if (sliderTop < triggerBottom) {
      slider.classList.add("show");
    } else {
      slider.classList.remove("show");
    }
  });
}
