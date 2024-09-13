const btnelement = document.querySelector('button')
const spanElement = document.querySelector('span')

btnelement.addEventListener('click', ()=>{
    const result = prompt('Enter your name')
    spanElement.textContent = result
})