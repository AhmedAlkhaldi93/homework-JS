// const tenTimes = (number) => number * 10;
const array1 = [1, 2, 3];
// const array2 = array1.map(item => tenTimes(item));
// console.log(array1);
// console.log(array2);


// Here how to make homemade map function...  
function homemadeMap(array, myFunction){
    const resultArray = [];
    for(let i = 0; i < array.length; i++){
        resultArray.push(myFunction(array[i]));
    }
    return resultArray;
}
// Here I am going to test it...
const array2 = homemadeMap(array1, (number) => number * 10);
console.log(array1);
console.log(array2);
