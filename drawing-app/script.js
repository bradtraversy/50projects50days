const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y

let startColor
let points = []

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    startColor = color
    points.push({x, y})
})

document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
    startColor = undefined
    points = []
})

canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        if (startColor) {
            points.push({x: x2, y: y2})
        }

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    console.log('circle', x, y, color)
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    console.log('line', x1, y1, x2, y2, color)
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value

    if (isPressed) {
        console.log('color changed while drawing')
        if (startColor !== color) {
            console.log(`fixing ${points.length} dots from ${startColor} to ${color}`)
            for (let i = 0; i < points.length - 1; i++) {
                drawCircle(points[i].x, points[i].y)
                drawLine(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y)
                drawCircle(points[i + 1].x, points[i + 1].y)
            }
            console.log('done fixing it')
            startColor = color
            points = []
        }
    }
})

clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))
