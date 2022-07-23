setInterval(() => {

  let d=new Date();
  let htime=d.getHours();
  let mtime=d.getMinutes();
  let stime=d.getSeconds();
  let hrotation=30*htime+(0.5*mtime);
  let mrotation=6*mtime;
  let srotation=6*stime;
  document.getElementById("hour").style.transform=`rotate(${hrotation}deg)`;
  document.getElementById("min").style.transform=`rotate(${mrotation}deg)`;
  document.getElementById("sec").style.transform=`rotate(${srotation}deg)`;
}, 1000);

function change(){ 
  document.body.style.backgroundColor = ' rgb(255, 249, 238)';
document.getElementById("clock_container").style.background="url(export202206140431597870.png) no-repeat";
document.getElementById("clock_container").style.position="relative";
document.getElementById("clock_container").style.backgroundSize="100%"
document.getElementById("hour").style.backgroundColor="#571c13";
document.getElementById("min").style.backgroundColor="#571c13";
document.getElementById("sec").style.backgroundColor="#571c13";
   }
   function change1(){ 
    document.body.style.backgroundColor = '#e5e5ff';
    document.getElementById("clock_container").style.background="url(export202206140530231210.png) no-repeat";
    document.getElementById("clock_container").style.position="relative";
    document.getElementById("clock_container").style.backgroundSize="100%"
    document.getElementById("hour").style.backgroundColor="#120503";
    document.getElementById("min").style.backgroundColor="#120503";
    document.getElementById("sec").style.backgroundColor="#120503";
       }