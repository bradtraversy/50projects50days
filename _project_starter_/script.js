const  boxesContaine  =   document.getElementById ('boxes')
const  btn = document.getElementById ('btn')

btn.addEventListener('click',  () => boxesContaine.classList.toggle('big'))

function createBoxes() {
  for  (let i = 0; i < 4; i++ ) {
    for  (let j = 0; j <4; j++)   {
        const box = document.createElement('div')
        box.classList.add('box')
        box.style.backgraoundPosition = `$ {-j} * 125}px ${-j * 125}px`
        boxesContaine.appendChild(box)
    } 
  }
}

createBoxes()