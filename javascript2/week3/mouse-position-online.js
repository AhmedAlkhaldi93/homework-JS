const xArray = [];
const yArray = [];
let counter = 0;

function averageIs(event){
    xArray.push(event.screenX);
    yArray.push(event.screenY);
};


setInterval(function() {        // setInterval It is a function that allows you to execute a specific code at a defined time interval
    if(xArray.length === 0 && yArray.length === 0){
        return;
    }
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
    xArray.length = 0;
    yArray.length = 0;
    }, 5000);

document.addEventListener("mousemove", averageIs);
