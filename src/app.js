import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let who = ['My dog', 'My grandma', 'My dad', 'My brother', 'My mom']
  let whoRandom = who[Math.floor(Math.random() * who.length)]

  let action = ['Broke', 'Destroy', 'Burn',]
  let actionRandom = action[Math.floor(Math.random() * action.length)]

  let what = ['My phone', 'My car', 'My laptop']
  let whatRandom = what[Math.floor(Math.random() * what.length)]

  let when = ['Before the class', 'In the backyard', 'during my lunch', 'while I was praying', 'when I was sleeping']
  let whenRandom = when[Math.floor(Math.random() * when.length)]

  const excuse = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`
  document.getElementById("excuse").innerText = excuse
  console.log(excuse.innerText)


  console.log(whoRandom, actionRandom, whatRandom, whenRandom);
};
