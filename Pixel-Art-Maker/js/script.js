
const box=document.getElementsByClassName("draw")[0];

let x=16;   //Default Sizes
let y=16;
let boxsize=1/x*100;

let selectedcolor="rgb(0,0,0)"; //Default Selected Color


let mousedown = false                   //Help variable that informs if the left mouse button is pressed.
document.body.onmousedown = () => (mousedown = true)
document.body.onmouseup = () => (mousedown = false)




function clearscr(){                           //Function for clearing the canvas
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
    pixel.style.backgroundColor='rgb(255,255,255)';});
}

function inpcolor(e){               //Function that changes the selected color.
    selectedcolor =  e.target.value;
}

function submitfun(){  //function that gets called when you press the submit button to change the canvas size.

    sizeinp=document.getElementById('size');
    textsize =  sizeinp.value;
    let textarray= textsize.split("x");
    x=parseInt(textarray[0]);
    y=parseInt(textarray[0]);
    if(x>150){x=150;
        y=150;}
    boxsize=1/x*100;

    removegridelements(box); //update canvas with new sizes.
    CreateGrid();
    clearscr();
}

function gridbuttonfun(e){ //function that turns the pixels grid on and off.s
    if (e.target.innerHTML == "Grid:On"){
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
        pixel.style.outline='none';
        e.target.innerHTML = "Grid:Off"});}
    else if (e.target.innerHTML=="Grid:Off"){
        const pixels = document.querySelectorAll('.pixel');
        pixels.forEach((pixel) => {
        pixel.style.outline='1px solid grey';
        e.target.innerHTML = "Grid:On"});
    }
}

function createpng(){ //function that creates a png image of the canvas.
    
    const pixelarray=document.getElementsByClassName("pixel");
    var p = new PNGlib(x, x, 256);
   
    for (var i = 0; i < x; i++){
        for (var j = 0; j < x; j++){
            var getpix = pixelarray[j*x+i];
            var colorpix=getpix.style.backgroundColor.split('rgb(');
            colorpix=colorpix[1];
            var colorarray= (colorpix).split(',');
            p.buffer[p.index(i, j)] = p.color(parseInt(colorarray[0]),parseInt(colorarray[1]),parseInt(colorarray[2]));}
    }
    document.write('<a href="data:image/png;base64,' + p.getBase64() + '" download="download"> click to download </a>');
}


function fillbackground(){ //function that changes every pixel in the canvas into the selected color.
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
    pixel.style.backgroundColor=selectedcolor;});
}

function removegridelements(e){ //function that removes all the pixels of the canvas.
    while (e.firstChild) {
        e.removeChild(e.firstChild);
    }
}


function changeColor(e) { //function that changes the color of a pixel.

    if (e.type === 'mouseover' && !mousedown) return
    
      e.target.style.backgroundColor = selectedcolor;

  }

function CreateGrid(){ //function that creates the pixel in the canvas.

for (let i=0;i<x;i++){
    let devrow = document.createElement("dev");

    devrow.classList.add("row");

    devrow.style.display="flex";
    devrow.style.height= `${boxsize}%`;
    devrow.style.width="100%";
    
    for (let j=0;j<y;j++){
    let devbox = document.createElement("dev");
    devbox.classList.add("pixel");
    devbox.style.height=`100%`;
    devbox.style.width= `${boxsize}%`;
    devbox.style.outline="1px solid grey";
    devbox.style.outline.offset= "-1px";
    
    devbox.addEventListener('mouseover', changeColor);
    devbox.addEventListener('mousedown', changeColor);
    devrow.appendChild(devbox) ; 
        }

            
    box.appendChild(devrow);
    }}



CreateGrid(); //default creation of the canvas.
clearscr();

//A list of event listeners for user inputs.
const clear = document.getElementById('clear');
clear.addEventListener('click',clearscr);

const filler = document.getElementById("backfill");
filler.addEventListener('click',fillbackground);

const colorpicker = document.getElementById("selectcol");
colorpicker.addEventListener("input", inpcolor);

const gridbutton = document.getElementById("border");
gridbutton.addEventListener("click",gridbuttonfun);

const sizesubmit = document.getElementById('sizesubmit');
sizesubmit.addEventListener("click",submitfun);

const downloadbut = document.getElementById('download');
downloadbut.addEventListener("click",createpng);