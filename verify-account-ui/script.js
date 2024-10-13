const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = e.key; 
            
            if (idx < codes.length - 1) {
                setTimeout(() => codes[idx + 1].focus(), 10);
            }
        } 
        else if (e.key === 'Backspace') {
            codes[idx].value = '';
            
            if (idx > 0) {
                setTimeout(() => codes[idx - 1].focus(), 10);
            }
        }
    });

    code.addEventListener('input', () => {
        if (code.value.length > 1) {
            code.value = code.value[code.value.length - 1]; 
        }
        if (code.value && idx < codes.length - 1) {
            setTimeout(() => codes[idx + 1].focus(), 10);
        }
    });
});
