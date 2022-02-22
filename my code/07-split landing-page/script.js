const body = document.getElementsByTagName("body")[0];

const gridItem = document.querySelectorAll(".grid-item");

gridItem.forEach((item) => {
  item.addEventListener("mouseover", handler);
  item.addEventListener("mouseout", removeHandler);
});

function handler(e) {
  if (e.target.id === "ps-container") {
    body.classList.add("ps-body");
  } else if (e.target.id === "xbox-container") {
    body.classList.add("xbox-body");
  }
}

function removeHandler(e) {
  body.classList.remove("ps-body");
  body.classList.remove("xbox-body");
}
