const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            setTimeout(() => codes[idx < codes.length - 1 ? idx + 1 : idx].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codes[idx > 0 ? idx - 1 : idx].focus(), 10)
        }
    })
})