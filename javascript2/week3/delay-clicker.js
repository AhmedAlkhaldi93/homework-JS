const delayClickerId = document.getElementById("delayClicker");

function delayClicker(){setTimeout(function() {
    console.log("This text was delayed by 3 seconds");
}, 3000)};

delayClickerId.addEventListener("click",delayClicker);

// Here is another solution
// delayClickerId.addEventListener("click",() => (setTimeout(function() {
//     console.log("This text was delayed by 3 seconds");
// }, 3000)));