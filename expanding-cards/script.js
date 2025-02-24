const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('mouseenter', () => {
        removeActiveClasses();
        panel.classList.add('skew-restore');
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('skew-restore')
        panel.classList.remove('active')
    })
}