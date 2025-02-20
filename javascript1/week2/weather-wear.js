function weatherWear(temperature){
    if(temperature < 10){
        console.log("You should wear a sweater, pants, and a scarf.");
    }else if(temperature < 18){
        console.log("You should wear a light jacket, jeans, and boots.");
    }else if(temperature < 25){
        console.log("You should wear a long-sleeve shirt, jeans, and sneakers.");
    }else{
        console.log("You should wear a shorts and a t-shirt.");
    }
}

weatherWear(9);