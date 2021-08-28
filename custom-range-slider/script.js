const decreaseBtn = document.querySelector('.decrease-btn');
const increaseBtn = document.querySelector('.increase-btn');
const slider = document.querySelector(".slider");
const label = document.querySelector(".label");
const allRanges = document.querySelectorAll(".range-container");

allRanges.forEach(wrap => {
    slider.addEventListener("input", () => {
        setLabel(slider, label);
    });
});

decreaseBtn.addEventListener('click', () => {
    slider.value--;
    setLabel(slider, label);

});
increaseBtn.addEventListener('click', () => {
    slider.value++;
    setLabel(slider, label);

});

function setLabel(slider, label) {
    const val = slider.value;
    const min = slider.min ? slider.min : 0;
    const max = slider.max ? slider.max : 100;
    const newVal = Number(((val - min) * 100) / (max - min));
    label.innerHTML = val;
    label.style.left = `calc(${newVal}% + (${17 - newVal}px))`;
}
