const wrapper = document.getElementById("wrapper");
const img = document.getElementById("img");

const images = [
  "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80",
  "https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
  "https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
];

let currentImg = 0;

function imageChanger() {
  wrapper.style.backgroundImage = `url('${images[currentImg]}')`;

  img.style.opacity = 0;
  img.src = images[currentImg];
  img.style.opacity = 1;
}

const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");

leftArrow.addEventListener("click", () => {
  if (currentImg === 0) {
    currentImg = 4;
  } else {
    currentImg--;
  }
  imageChanger();
});

rightArrow.addEventListener("click", () => {
  if (currentImg === 4) {
    currentImg = 0;
  } else {
    currentImg++;
  }
  imageChanger();
});
