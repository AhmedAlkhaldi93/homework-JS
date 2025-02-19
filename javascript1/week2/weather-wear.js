function weatherWear(temperature){
    if(temperature < 18){
        console.log("You should wear a sweater, pants, and a scarf.");
    }else{
        console.log("You should wear a shorts and a t-shirt.");
    }
}

weatherWear(20);