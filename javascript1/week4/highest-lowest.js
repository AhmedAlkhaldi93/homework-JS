function highAndLow(numbers){
    const splitNumbers = numbers.split(" ").map(Number);
    let highNum = splitNumbers[0];
    let lowNum = splitNumbers[0];
    for(let i = 0; i < splitNumbers.length; i++){
        if(highNum < splitNumbers[i]){
            highNum = splitNumbers[i];
        }
        if(lowNum > splitNumbers[i]){
            lowNum = splitNumbers[i];
        }
    }
    return highNum +" "+lowNum;
  }

  console.log(highAndLow("5 2 -3 1"));