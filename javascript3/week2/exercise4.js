function YesNoFail4Seconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.33) {
                resolve("Yes");
            } else if (random < 0.66){
                resolve("No");
            } else {
                reject("Something went wrong!");
            }   
        }, 4000);    
    });
}


async function runYesNO(){
    try {
     const result = await YesNoFail4Seconds();
     console.log("The result is " + result);   
    } catch (error) {
        console.log(error);
    }
}

runYesNO();