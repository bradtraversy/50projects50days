const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

var mouse = document.querySelector('#mousefollower');

document.body.addEventListener('mousemove',(details)=>{
    var x = details.pageX;
    var y = details.pageY;
    console.log(y)
    mouse.style.transform = `translate(${x}px,${y}px)`
})

document.body.addEventListener('mouseenter',(details)=>{
    mouse.style.opacity = '1'
})

document.body.addEventListener('mouseleave',(details)=>{
    mouse.style.opacity = '0'
})