function getCircleArea(radius){
    const circleArea = Math.PI * Math.pow(radius,2);
    return circleArea;
}
const circleArea = getCircleArea(5);
console.log("The circle area is "+circleArea);

//-------------------------------------------------------

function celciusToFahreneit(celcius){
    const fahrenheit = (celcius * 9/5) + 32;
    return fahrenheit;
}

const fahrenheit = celciusToFahreneit(50);
console.log("The temperature in fahrenheit is "+fahrenheit);
