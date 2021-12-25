let colorInput = document.querySelector("#color");
let textInput = document.querySelector("#text");
colorInput.addEventListener('input', () => {
    let color = colorInput.value;
    document.body.style.backgroundColor = color;
});
textInput.addEventListener('input', () =>
{
    let folor = textInput.value;
    document.querySelector("#one").style.color = folor;
    document.querySelector("#two").style.color = folor;
    document.querySelector("#message").style.color = folor;
});
