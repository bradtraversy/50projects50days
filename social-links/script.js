const container = document.getElementById('container') 
const open = document.getElementById('open') 
const close = document.getElementById('close') 

open.addEventListener('click', () => container.classList.add('open'))

close.addEventListener('click', () => container.classList.remove('open'))