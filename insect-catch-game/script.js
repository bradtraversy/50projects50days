const screens = document.querySelectorAll('.screen');
const choose_insect_btns = document.querySelectorAll('.choose-insect-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const highScoreEl = document.getElementById('high-score')
const speedSlider = document.getElementById('speed')
const speedValue = document.getElementById('speed-value')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_insect = {}
let gameSpeed = 1
let highScore = localStorage.getItem('insectCatchHighScore') || 0

highScoreEl.innerHTML = `High Score: ${highScore}`

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_insect_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const emoji = btn.querySelector('span')
        if (img) {
            const src = img.getAttribute('src')
            const alt = img.getAttribute('alt')
            selected_insect = { type: 'img', src, alt }
        } else if (emoji) {
            const content = emoji.textContent
            const alt = btn.querySelector('p').textContent.toLowerCase()
            selected_insect = { type: 'emoji', content, alt }
        }
        screens[1].classList.add('up')
        setTimeout(createInsect, 1000)
        startGame()
    })
})

speedSlider.addEventListener('input', (e) => {
    gameSpeed = parseInt(e.target.value)
    speedValue.textContent = `${gameSpeed}x`
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createInsect() {
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const { x, y } = getRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    
    if (selected_insect.type === 'emoji') {
        insect.innerHTML = `<span style="font-size: 80px; transform: rotate(${Math.random() * 360}deg); display: inline-block;">${selected_insect.content}</span>`
    } else {
        insect.innerHTML = `<img src="${selected_insect.src}" alt="${selected_insect.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`
    }

    insect.addEventListener('click', catchInsect)

    game_container.appendChild(insect)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchInsect() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addInsects()
}

function addInsects() {
    const baseDelay = 1000
    const adjustedDelay = baseDelay / gameSpeed
    
    setTimeout(createInsect, adjustedDelay)
    setTimeout(createInsect, adjustedDelay * 1.5)
}

function increaseScore() {
    score++
    scoreEl.innerHTML = `Score: ${score}`
    
    if (score > highScore) {
        highScore = score
        highScoreEl.innerHTML = `High Score: ${highScore}`
        localStorage.setItem('insectCatchHighScore', highScore)
    }
    
    if(score > 19) {
        message.classList.add('visible')
    }
}
