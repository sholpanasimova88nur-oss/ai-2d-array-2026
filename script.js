let usedAI=false;
let totalTime=600;
let timeLeft=totalTime;
let startTime=Date.now();

setInterval(()=>{
  let min=Math.floor(timeLeft/60);
  let sec=timeLeft%60;
  document.getElementById("time").innerText=
    `${min}:${sec<10?'0'+sec:sec}`;
  timeLeft--;
},1000);

function useAI(){
  usedAI=true;
  timeLeft-=120;
  document.getElementById("aiBox").innerText=
    "AI: екі цикл қолданылады";
}

function check(){
  let name=document.getElementById("name").value;
  let answer=document.getElementById("answer").value;
  if(!name||!answer){alert("Толтырыңыз");return;}

  let score=answer==="20"?100:0;
  if(usedAI) score-=20;

  let grade=score>=90?5:score>=75?4:score>=50?3:2;
  document.getElementById("result").innerHTML=
    `Нәтиже: ${score}% | Баға: ${grade}`;

  if(score>=60){
    localStorage.setItem("cert",JSON.stringify({
      name,score,grade,
      type:"🥇 Сертификат",cls:"gold",
      time:Math.floor((Date.now()-startTime)/60000)+" мин"
    }));
    let b=document.createElement("button");
    b.innerText="🏆 Сертификат";
    b.onclick=()=>location.href="certificate.html";
    result.appendChild(document.createElement("br"));
    result.appendChild(b);
  }
}
