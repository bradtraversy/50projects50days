const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
const body = document.body

body.addEventListener('dragstart', dragStart)
body.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart(e) {
    if(!e.target.classList.contains("fill")) {
        e.preventDefault()
        return
    }
    fill.className += ' hold' 
    setTimeout(() => fill.className = 'invisible', 0)
}

function dragEnd() {
    fill.className = 'fill'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

function dragLeave() {
    this.className = 'empty'
}

function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}