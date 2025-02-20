//-------------------------------------EVENT APPLICATION--------------------------------

function getEventWeekday(x){
    const todayIs = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const eventDayIs = (x + new Date().getDay()) % 7 ;
    console.log("The event day is " + todayIs[eventDayIs]);

}

getEventWeekday(9);