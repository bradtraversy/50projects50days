let currentStep = 1;
const numbers = document.querySelectorAll(".number");
const bars = document.querySelectorAll(".bar");

const prev = () => {
  currentStep--;

  if (currentStep < 1) {
    currentStep = 1;
  }

  update();
};

const next = () => {
  currentStep++;

  if (currentStep > 4) {
    currentStep = 4;
  }

  update();
};

function update() {
  numbers.forEach((number, index) => {
    if (index < currentStep) {
      number.classList.add("active");
    } else {
      number.classList.remove("active");
    }
  });

  bars.forEach((bar, index) => {
    if (index < currentStep - 1) {
      bar.classList.add("active-bar");
    } else {
      bar.classList.remove("active-bar");
    }
  });

  if (currentStep > 1) {
    document.getElementById("prev").disabled = false;
  } else {
    document.getElementById("prev").disabled = true;
  }

  if (currentStep < 4) {
    document.getElementById("next").disabled = false;
  } else {
    document.getElementById("next").disabled = true;
  }
}
