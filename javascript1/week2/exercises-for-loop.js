for (let i =74; i <= 98; i++){
    console.log(i);
}

//------------------------------------------
function forLoopFun(stringToLog, numberOfTimesToLog){
    for (let i =0; i < numberOfTimesToLog; i++){
        console.log(stringToLog);
    }
}
forLoopFun("ahmed", 3);

//------------------------------------------

function sendEmailTo(recepient){
    console.log('email sent to ' + recepient);
}

const recepient = "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com";
const recepientArray = recepient.split("|");

for(let i = 0; i < recepientArray.length; i++){
    sendEmailTo(recepientArray[i]);
}
