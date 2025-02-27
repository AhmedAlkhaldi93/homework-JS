const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
function  travelPeriod(travelInformation){
    const hours =  Math.floor(travelInformation.destinationDistance / travelInformation.speed);
    const minutes = Math.floor((travelInformation.destinationDistance / travelInformation.speed - hours) * 60);
    return hours + " hours and " + minutes + " minutes.";
}


  const travelTime = travelPeriod(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes