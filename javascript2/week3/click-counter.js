const firstButton = document.getElementById("firstButton");
const secondButton = document.getElementById("secondButton");
let countNum = -1;

function count(){
    countNum = countNum + 1;
    console.log(countNum);
    return countNum;
};

firstButton.addEventListener("click",  count);
secondButton.addEventListener("click", count);
