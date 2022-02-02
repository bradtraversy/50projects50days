const codes = document.querySelectorAll('.code')
const length = codes.length

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codes[idx].value = ''
            if(length - 1 == idx) {
              return  
            }
            setTimeout(() => codes[idx + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            if(idx == 0) {
              return   
            }
            setTimeout(() => codes[idx - 1].focus(), 10)
        }
    })
})