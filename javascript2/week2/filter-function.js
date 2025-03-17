function homemadeFilter(array, myFunction){
    const resultArray = [];
    for(let i = 0; i < array.length; i++){
        if(myFunction(array[i]) === true){
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

const arrayF1 = [10, 20, 30, 40];
const arrayF2 = homemadeFilter(arrayF1,num => num >= 30);
console.log(arrayF2);
