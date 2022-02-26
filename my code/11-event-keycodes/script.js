const container = document.getElementById("container");

addEventListener("keydown", (e) => {
  console.log(e);

  container.innerHTML = `<div class="key">
        <span class="subtext">
            event.key
        </span>
        <span class="text">
${e.code === "Space" ? "space" : e.key}
        </span>
    </div>
    <div class="key">
        <span class="subtext">
            event.keycode
        </span>
        <span class="text">
${e.keyCode.toString()}
        </span>
    </div>
    <div class="key">
        <span class="subtext">
            event.code
        </span>
        <span class="text">
${e.code}
        </span>
    </div>`;
});
