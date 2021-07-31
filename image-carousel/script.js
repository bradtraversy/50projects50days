const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 1

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = img.length - 1

        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-idx * 500}px)`

        setTimeout(function() {
            idx = 1;  
            imgs.style.transition = ''; 
            imgs.style.transform = `translateX(${-500}px)`
        },0)
    } 
    else if(idx < 0){
        idx = 0

        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-idx * 500}px)`

        setTimeout(function() {
            idx = img.length - 2;  
            imgs.style.transition = ''; 
            imgs.style.transform = `translateX(${-idx * 500}px)`
        },0)
    }
    else{
        imgs.style.transition = 'all, linear, 1s';
        imgs.style.transform = `translateX(${-idx * 500}px)`
    }
    
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})