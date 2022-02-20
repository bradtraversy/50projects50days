let percent = 0;
const span = document.getElementById("percent");
const bg = document.getElementById("blurry-bg");

const loading = setInterval(() => {
  span.innerHTML = percent.toString() + "%";
  bg.style.backdropFilter = "blur(" + ((100 - percent) / 5).toString() + "px)";
  span.style.opacity = ((100 - percent) / 100).toString();
  percent++;

  if (percent > 100) {
    clearInterval(loading);
  }
}, 20);
