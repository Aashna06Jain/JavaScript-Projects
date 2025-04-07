const roll = document.getElementById("rollBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const min = 1;
const max = 100;
let randomNum1;
let randomNum2;

roll.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
}