
var car = document.querySelector('.loveMe');
var clutter = 0;
var times = document.querySelector('#times');

car.addEventListener('dblclick', () => {
    clutter++;
    var heart = document.querySelector('#heart');
    heart.style.opacity = 1;
    heart.style.transform = 'scale(1)';
    setTimeout(() => {
        heart.style.transform = 'scale(0)';
        heart.style.opacity = '0';
    }, 600)
    setTimeout(()=>{
        heart.style.display = 'initial';
    },620)
    times.innerHTML = clutter;
})