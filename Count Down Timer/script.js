
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

var h = document.getElementById("hour");
var m = document.getElementById("minute");
var s = document.getElementById("sec");

//store a reference to the startTimer variable
var startTimer = null;

start.disabled = true;

[h, m, s].forEach(input => {
  input.addEventListener('input', () => {
    if (h.value > 0 || m.value > 0 || s.value > 0) {
      start.disabled = false;
    } else {
      start.disabled = true;
    }
  });
});

start.addEventListener('click', function(){
    //initialize the variable
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
    startInterval();
    start.style.display = "none";
    pause.style.display = "inline-block";
    reset.style.display = "inline-block";
})


pause.addEventListener('click', function(){
    stopInterval();
    pause.style.display = "none";
    start.style.display = "inline-block";
});


reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    //stop the timer after pressing "reset"
    stopInterval();
    start.disabled = true;
    start.style.display = "inline-block";
    pause.style.display = "none";
    reset.style.display = "none";
})

function timer(){
    if(h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
        start.disabled = true;
    } else if(s.value != 0){
        s.value--;
    } else if(m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    }
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        start.disabled = true;
    }
    return;
}



//stop the function after pressing the reset button, 
//so the time wont go down when selecting a new time after pressing reset
function stopInterval() {
    clearInterval(startTimer);
}