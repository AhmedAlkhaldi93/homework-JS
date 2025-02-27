const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
    {
        title: "Prison Break",
        days: 4,
        hours: 21,
        minutes: 27,
      }
  ];
  
  const myAge = 31;
  function logOutSeriesText(seriesDurations){
    const myAgeMin = myAge * 360 * 24 * 60;
    let output = "";
    let totalPercentage = 0;
    for(let i = 0; i < seriesDurations.length; i++){
        const mySeriesMin = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
        const results = (mySeriesMin / myAgeMin) * 100;
        output = output +"\n"+ seriesDurations[i].title +" took " +  results.toFixed(3) + " % of my life.";
        totalPercentage = totalPercentage + results;
    }
    return output + "\n\nIn total that is " + totalPercentage.toFixed(3) + " % of my life.";
  }
  
  console.log(logOutSeriesText(seriesDurations));

