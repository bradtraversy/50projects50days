const insert = document.getElementById('insert')
const log = document.getElementById('log')
let lastEvent=null;
window.addEventListener('keydown', (event) => {
if(lastEvent){
  log.innerHTML +=`<div>
     <div class="key">
     ${lastEvent.key === ' ' ? 'Space' : lastEvent.key} 
     <small>event.key</small>
     </div>
    <div class="key">
  ${lastEvent.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${lastEvent.code}
  <small>event.code</small>
</div>
</div>
  `
}
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>

  `
  lastEvent=event;
})