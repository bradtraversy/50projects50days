let inputDir={x:0,y:0};
let food={x:6,y:7};
const foodSound=new Audio('music/food.mp3');
const gameOverSound=new Audio('music/gameover.mp3');
const movesound=new Audio('music/move.mp3');
const musicsound=new Audio('music/music.mp3');
let speed=5;
let score=0;
let snakearr=[{x:13,y:15}]
let LastPaintTime=0;
let hiscoreval=0;
alert("Rules: press arrow keys to move in the field,make sure you dont bump into yourself or the field boundaries and eat more to score more ");
function main(ctime){
  window.requestAnimationFrame(main);
  // console.log(ctime);
  if((ctime-LastPaintTime)/1000<1/speed){
    return;
  }
  LastPaintTime=ctime;
  game_engine();
}
function isCollide(snake){
  //if the snake bumps into itself
  for(let i=1;i<snake.length;i++)
{
  if (snake[i].x===snake[0].x && snake[i].y===snake[0].y ){
    return true;
  }
}
  if(snake[0].x>=18 ||snake[0].x<=0 || snake[0].y>=18 ||snake[0].y<=0)
  return true;
}
function game_engine(){
  //updating the snake array & food
  if(isCollide(snakearr)){
    gameOverSound.play();
    musicsound.pause();
    inputDir={x:0,y:0};
    alert("game over, press any key to play again!");
    snakearr=[{x:13,y:15}]
    musicsound.pause();
    score=0;
  }
  if(snakearr[0].y===food.y && snakearr[0].x===food.x){
    foodSound.play();
    score++;
    if(score>=8){
      speed=8;
    }
    if(score>hiscoreval){
      hiscoreval=score;
      localStorage.setItem('hiscore',JSON.stringify(hiscoreval))
      h_score.innerHTML="High Score :"+ hiscoreval;
    }
    document.getElementById('score').innerHTML="Score : "+score;
    snakearr.unshift({x:snakearr[0].x +inputDir.x,y:snakearr[0].y +inputDir.y}) //adding extra chain to the snake's moving dir
    let a=2;
    let b=16;
    food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())};

    }

  //moving the snake
  for (let i = snakearr.length-2; i >=0; i--) {
    snakearr[i+1]={...snakearr[i]};//equal to a new object here(to avoid reference problem and to avoid pointing of objects at a single point)
  }
  snakearr[0].x +=inputDir.x;
  snakearr[0].y +=inputDir.y;

  // displaying the snake and food
  // snake
  document.getElementById("board").innerHTML=" ";
  snakearr.forEach((e,index)=>{
    snakeElement=document.createElement('div');
    snakeElement.style.gridRowStart=e.y;
    snakeElement.style.gridColumnStart=e.x;
    if(index===0){
      snakeElement.classList.add('head');
    }
    else{
      snakeElement.classList.add('snake');
    }
    board.appendChild(snakeElement);
  })
// food
foodElement=document.createElement('div');
foodElement.style.gridRowStart=food.y;
foodElement.style.gridColumnStart=food.x;
foodElement.classList.add('food');
board.appendChild(foodElement);
}
//main logic
let hiscore=localStorage.getItem('h_score');
if(hiscore===null){
localStorage.setItem('hiscore',JSON.stringify(hiscoreval))
}
else{
  hiscoreval=JSON.parse(hiscore);
  h_score.innerHTML="High Score :"+ hiscoreval;
}
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
  inputDir={x:0,y:1} //start
movesound.play();
switch(e.key){
  case "ArrowUp":
    console.log("ArrowUp")
    inputDir.x=0;
    inputDir.y=-1;
    break;
    case "ArrowLeft":
    inputDir.x=-1;
    inputDir.y=0;
    console.log("ArrowLeft")
    break;
    case "ArrowRight":
    inputDir.x=1;
    inputDir.y=0;
    console.log("ArrowRight")
    break;
    case "ArrowDown":
      inputDir.x=0;
      inputDir.y=1;
    console.log("ArrowDown")
    break;
    default:
      break;
}
});
