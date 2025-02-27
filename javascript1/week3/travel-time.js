const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
function  travelPeriod(travelInformation){
    const hours =  Math.floor(travelInformation.destinationDistance / 50);
    const minutes = Math.floor((travelInformation.destinationDistance / 50 - hours)*60);
    return hours + " hours and " + minutes + " minutes.";
}


  const travelTime = travelPeriod(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes