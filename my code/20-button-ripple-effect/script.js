const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.left = `${e.clientX - e.target.offsetLeft}px`;
  circle.style.top = `${e.clientY - e.target.offsetTop}px`;
  console.log(e);
  button.appendChild(circle);

  setTimeout(() => circle.remove(), 500);
});
