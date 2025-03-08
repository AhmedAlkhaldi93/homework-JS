//--------------------------------------Adding an activity-----------------------

const activities = [];
let today  = new Date().toLocaleDateString("en-GB");

function addActivity(activity, duration){
    if(typeof today === "string" && typeof activity === "string" && typeof duration === "number"){
        const objActivities = {
            date: today,
            activity: activity,
            duration: duration
        };        
        activities.push(objActivities);
    }else{
        console.log("Please enter the right information.");
    }
    return activities;
}

addActivity("Youtube", 30);
addActivity("Facebook", 20);
addActivity("Youtube", 10);

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

////--------------------------------------spent the most time on-----------------------
    // for(let i = 0; i < activities.length; i++){
    //     let totlaSpent = activities[i].duration;
    //     let x = activities.length-1;
    //         if(activities[i].activity === activities[x].activity){
    //             totlaSpent += activities[x].duration; 
    //         }
    //     console.log(totlaSpent);
    // }
