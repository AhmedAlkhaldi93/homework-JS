function fizzBuzz(fizz,buzz){
    for(let i = 1; i <=100; i++){
        const fizzNumber = i % fizz;
        const buzzNumber = i % buzz;
        if(fizzNumber === 0 && buzzNumber === 0){
            console.log("FizzBuzz");
        }else if(fizzNumber === 0){
            console.log("Fizz");
        }else if(buzzNumber === 0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}


fizzBuzz(3,5);
