const xArray = [];
const yArray = [];
let counter = 0;

function averageIs(event){
    xArray.push(event.screenX);
    yArray.push(event.screenY);
};


setTimeout(function() {
    let totalX = 0;
    for(let i = 0; i < xArray.length; i++){
        totalX = totalX + xArray[i];
    }
    let totalY = 0;
    for(let i = 0; i < yArray.length; i++){
        totalY = totalY + yArray[i];
    }
    const avaX = totalX / xArray.length;
    const avaY = totalY / yArray.length;
    console.log("average : "+ avaX + " and " + avaY);
    }, 5000);

document.addEventListener("mousemove", averageIs);
