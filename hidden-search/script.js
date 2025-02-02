const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus();
    btn.style.borderRadius = '20px';
    input.style.borderRadius = '20px';
})