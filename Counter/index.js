let count = 1;

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const contentLabel = document.getElementById("count");

increaseBtn.onclick = function(){
    count++;
    contentLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    contentLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    contentLabel.textContent = count;
}
