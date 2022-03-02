const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const target = parseInt(counter.getAttribute("data-target"));
    const text = parseInt(counter.innerText);

    const inc = target / 2000;

    if (text < target) {
      counter.innerText = Math.ceil(text + inc);
      setTimeout(() => {
        updateCounter();
      }, 100);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
