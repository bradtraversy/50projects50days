const btns = document.querySelectorAll(".btn");
const body = document.querySelector("body");
let addText = "";

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    addText = `<audio id="${e.target.id}-sound" src="./sounds/${e.target.id}.mp3"></audio>`;

    stopSong();

    console.log(e, e.target.id);

    body.innerHTML += addText;
    document.getElementById(e.target.id + "-sound").play();
    // stopSong(addText);
  });
});

function stopSong() {
  const audio = document.querySelectorAll("audio");

  audio.forEach((elm) => {
    elm.pause();
    elm.currentTime = 0;
  });
}
