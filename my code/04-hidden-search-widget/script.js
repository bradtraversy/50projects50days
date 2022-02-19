const input = document.getElementById("text");
let i = 1;

function clickHandler() {
  if (!(i % 2)) {
    input.classList.remove("active");
  } else {
    input.classList.add("active");
    input.focus();
  }

  i++;
}
