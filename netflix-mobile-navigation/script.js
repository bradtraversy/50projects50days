const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.getElementById('nav');

open_btn.addEventListener('click', () => {
    nav.classList.add('visible');
});

close_btn.addEventListener('click', () => {
    nav.classList.remove('visible');
});
