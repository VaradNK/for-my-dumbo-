const pages=[...document.querySelectorAll('.page')];
function show(i){pages.forEach(p=>p.classList.remove('active'));pages[i].classList.add('active');}
startBtn.onclick=()=>show(1);
env.onclick=()=>show(2);
next.onclick=()=>show(3);

setInterval(()=>{
 const h=document.createElement('div');
 h.className='heart';
 h.textContent=Math.random()>0.5?'❤':'🩷';
 h.style.left=Math.random()*100+'vw';
 h.style.fontSize=(16+Math.random()*22)+'px';
 h.style.animationDuration=(5+Math.random()*5)+'s';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),10000);
},250);
