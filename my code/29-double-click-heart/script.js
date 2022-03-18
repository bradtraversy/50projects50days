let count = 0;
const counter = document.getElementById("counter");
const img = document.getElementById("img");

img.addEventListener("dblclick", () => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.classList.add("active");
  document.body.append(heart);

  count++;
  counter.innerHTML = count;

  setTimeout(() => {
    heart.remove();
  }, 2000);
});
