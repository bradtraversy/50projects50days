let strokeValue = 10;

const incCounter = document.getElementById("inc");
const decCounter = document.getElementById("dec");
const stroke = document.getElementById("stroke");

const color = document.getElementById("color");
let colorVal = color.value;
let isPressed = false;
let x, y;

stroke.innerText = strokeValue;

incCounter.addEventListener("click", () => {
  if (strokeValue < 50) {
    strokeValue = strokeValue + 5;
    stroke.innerText = strokeValue;
  }
});
decCounter.addEventListener("click", () => {
  if (strokeValue > 5) {
    strokeValue = strokeValue - 5;
    stroke.innerText = strokeValue;
  }
});

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

document.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, strokeValue, 0, Math.PI * 2);
  ctx.fillStyle = colorVal;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = colorVal;
  ctx.lineWidth = strokeValue * 2;
  ctx.stroke();
}
