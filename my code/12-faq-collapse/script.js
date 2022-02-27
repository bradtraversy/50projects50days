const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  let opened = false;
  btn.addEventListener("click", (e) => {
    console.log(e.path[3]);

    if (!opened) {
      e.path[3].classList.add("active");
      opened = true;
    } else {
      e.path[3].classList.remove("active");
    }
  });
});
