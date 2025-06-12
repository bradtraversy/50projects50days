let inp1 = document.querySelector(".inp-1");
let inp2 = document.querySelector(".inp-2");
let add = document.querySelector(".addi");
let multi = document.querySelector(".multi");
let divi = document.querySelector(".divi");
let sub = document.querySelector(".sub");
// let ans = document.querySelector('.ans');
let ans = document.querySelector(".ans-box");
let clear = document.querySelector(".clear");
add.addEventListener("click", () => {
  let answer = parseInt(inp1.value) + parseInt(inp2.value);
  ans.value = answer;
});
sub.addEventListener("click", () => {
  let answer = parseInt(inp1.value) - parseInt(inp2.value);
  ans.value = answer;
});
multi.addEventListener("click", () => {
  let answer = parseInt(inp1.value) * parseInt(inp2.value);
  ans.value = answer;
});
divi.addEventListener("click", () => {
  let answer = parseInt(inp1.value) / parseInt(inp2.value);
  ans.value = answer;
});
clear.addEventListener("click", () => {
  inp1.value = "";
  inp2.value = "";
  ans.value = "";
});
