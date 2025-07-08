import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  function generateRandomValue (array) {
     
    return array[Math.floor(Math.random() * array.length)]
  }

  let who = ['My dog', 'My grandma', 'My dad', 'My brother', 'My mom']
  let whoRandom = generateRandomValue(who)

  let action = ['Broke', 'Destroy', 'Burn',]
  let actionRandom = generateRandomValue(action)

  let what = ['My phone', 'My car', 'My laptop']
  let whatRandom = generateRandomValue(what)

  let when = ['Before the class', 'In the backyard', 'during my lunch', 'while I was praying', 'when I was sleeping']
  let whenRandom = generateRandomValue(what)

  const excuse = `${whoRandom} ${actionRandom} ${whatRandom} ${whenRandom}`
  document.getElementById("excuse").innerText = excuse
  console.log(excuse)

};