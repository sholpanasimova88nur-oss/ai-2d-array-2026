let c=JSON.parse(localStorage.getItem("cert"));
type.innerText=c.type;
name.innerText=c.name;
info.innerHTML=
  `Нәтиже: ${c.score}%<br>Баға: ${c.grade}<br>Уақыт: ${c.time}`;
