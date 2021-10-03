const codes = document.querySelectorAll('.code')
const info = document.querySelector('.info')
let notice = ''

codes[0].focus()

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {

        if (e.keyCode == '32') {
            if (idx != 0) setTimeout(() => codes[idx - 1].focus(), 10)
        } else if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = ''
            if (idx < codes.length - 1) setTimeout(() => codes[idx + 1].focus(), 10)
        } else {
            console.log(e.key);
            //Block input if it's not a number
            e.preventDefault();
            info.classList.add('error');
            info.innerHTML = 'You can only enter numbers!'

            //If you do not clear the timer, holding it down will cause too many timers to start
            clearTimeout(notice)
            notice = setTimeout(() => {
                info.classList.remove('error');
                info.innerHTML = `'This is design only. We didn't actually send you an email as we don't have your email, right?'`
            }, 1000)
        }
    })
})