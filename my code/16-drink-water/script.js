const wrapper = document.getElementById("glasses-wrapper");

for (let i = 0; i < 8; i++) {
  const span = document.createElement("span");
  span.classList.add("glass-small-text");

  const text = document.createTextNode("250 ml");
  span.appendChild(text);

  const div = document.createElement("div");
  div.classList.add("glass");
  div.classList.add("glass-small");
  div.id = i;
  div.appendChild(span);

  div.addEventListener("click", () => clickHandler(div));
  wrapper.appendChild(div);
}

function clickHandler(div) {
  const id = +div.id;

  bigGlassHandler(id + 1);
  smallGlassHandler(id);
}

function bigGlassHandler(id) {
  const glass = document.getElementById("glass-big");
  glass.children[0].innerHTML = "";
  glass.children[1].innerHTML = "";

  glass.children[0].style.height = `${100 - id * (100 / 8)}%`;
  glass.children[0].innerHTML = `<h3 class="blue-text">${2 - (2 / 8) * id}L</h3>
            <h5 class="blue-text">remaining</h5>`;

  if (id === 8) {
    glass.children[0].innerHTML = "";
  }
  glass.children[1].style.height = `${id * (100 / 8)}%`;
  glass.children[1].style.opacity = "1";
  glass.children[1].innerHtml = `${id * (100 / 8)}%`;
  console.log(glass.children, id);
}

function smallGlassHandler(id) {
  const smallGlasses = document.querySelectorAll(".glass-small");

  for (let i = 0; i < smallGlasses.length; i++) {
    smallGlasses[i].classList.remove("active");
  }
  for (let i = 0; i < id + 1; i++) {
    smallGlasses[i].classList.add("active");
  }
}
