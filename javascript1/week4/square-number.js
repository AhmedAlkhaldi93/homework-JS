function squareDigits(num){
    let result = "";
    let numString = num.toString();
    
    for(let i = 0; i < numString.length; i++){
        const squareNum = numString[i] * numString[i];
        result = result + squareNum;
    }
    return Number(result);
  }

  console.log(squareDigits(3212));