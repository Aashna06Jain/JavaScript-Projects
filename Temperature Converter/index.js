const input = document.getElementById("input");
const toF = document.getElementById("toFahrenheit");
const toC = document.getElementById("toCelsius");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let temp;

submit.onclick = function convert(){
    event.preventDefault(); //Prevents the form from refreshing itself

    if(toF.checked){
        temp = input.value;
        tempInC = Number(temp);
        tempInF = (tempInC  * (9/5)) + 32;
        result.textContent = `The temperature in Fahrenheit is ${tempInF.toFixed(1)} F`;
    }

    else if(toC.checked){
        temp = input.value;
        tempInF = Number(temp);
        tempInC = (tempInF - 32) * (5/9);
        result.textContent = `The temperature in Celsius is ${tempInC.toFixed(1)} C` ;
    }

    else{
        result.textContent = "You need to Select a Unit!";
    }
}