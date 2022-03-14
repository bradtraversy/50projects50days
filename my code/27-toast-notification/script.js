const button = document.getElementById("button");
const wrapper = document.getElementById("wrapper");

let variable = 0;

button.addEventListener("click", () => {
  const number = Math.ceil(Math.random() * 4);

  const span = document.createElement("span");
  span.classList.add("msg");

  let text = "";
  let color = "";

  switch (number) {
    case 1:
      text = "Message One";
      color = "blue";
      break;

    case 2:
      text = "Message two";
      color = "green";
      break;

    case 3:
      text = "Message Three";
      color = "red";
      break;

    default:
      text = "Message Four";
      color = "yellow";
      break;
  }

  span.append(document.createTextNode(text));
  span.style.color = color;
  span.style.fontWeight = "500";

  wrapper.append(span);

  setTimeout(() => {
    span.remove();
  }, 2000);
});
