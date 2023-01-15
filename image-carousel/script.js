const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let PO = 0

let interval = setInterval(run, 2000)

function run() {
    PO++;
    changeImage()
}

function changeImage() {
    if(PO > img.length - 1) {
        PO = 0
    } else if(idx < 0) {
        PO = img.length - 1
    }

    imgs.style.transform = `translateX(${-PO * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    PO++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    PO--
    changeImage()
    resetInterval()
})
