//--------------------------------------Adding an activity-----------------------

const activities = [];

function addActivity(date, activity, duration){
    if(typeof date === "string" && typeof activity === "string" && typeof duration === "number"){
        const objActivities = {
            date: date,
            activity: activity,
            duration: duration
        };        
        activities.push(objActivities);
    }else{
        console.log("Please enter the right information.");
    }
    return activities;
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);

console.log(activities);

//--------------------------------------Show my status-----------------------Usage limit

function showStatus(setLimit){
    let totalTime = 0;
    if(activities.length === 0){
        return "Add some activities before calling showStatus."
    }else{
        for(let i = 0; i < activities.length; i++){
            totalTime = totalTime + activities[i].duration;
            if(totalTime >= setLimit){
                return "You have reached your limit, no more smart phoning for you!"
            }
        }
        return "You have added " +activities.length+ " activities. They amount to " + totalTime + " min. of usage.";
    }
}
console.log(showStatus(100));


