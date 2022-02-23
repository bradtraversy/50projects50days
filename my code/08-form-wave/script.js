const labels = document.querySelectorAll("label");
const email = document.getElementById("email");
const password = document.getElementById("password");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

window.addEventListener("click", () => {
  if (email == document.activeElement) {
    labels[0].classList.add("active");
    labels[1].classList.remove("active");
  } else if (password == document.activeElement) {
    labels[1].classList.add("active");
    labels[0].classList.remove("active");
  } else {
    labels[0].classList.remove("active");
    labels[1].classList.remove("active");
  }
});
