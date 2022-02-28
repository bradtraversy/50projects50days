const textarea = document.getElementById("field");
const label = document.getElementById("labels");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key == "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(str) {
  const tags = str
    .split(",")
    .map((tag) => tag.trim())
    .filter((tag) => tag !== "");
  console.log(tags);

  label.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;

    label.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = randomTagPicker();
    console.log(randomTag);

    randomTag.classList.add("highlight");

    setTimeout(() => {
      randomTag.classList.remove("highlight");
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      randomTagPicker().classList.add("highlight");
    }, 100);
  }, times * 100);
}

function randomTagPicker() {
  const tags = document.querySelectorAll(".tag");

  return tags[Math.floor(Math.random() * tags.length)];
}
