const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
const time_limit=10000;
let active=false;
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
    active =!active
    if(active){
   var time_out= setTimeout(()=>{
        search.classList.toggle('active')
    },time_limit)
}
})
input.addEventListener('change',()=>{
    active=true;
    
    clearTimeout(time_out);
})