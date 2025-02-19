
const boughtCandyPrices = [];

function addCandy(candyType, weight){
    let x;
    if (candyType === "Sweet"){
        boughtCandyPrices.push(0.5 * weight);
        x= 0.5 * weight;
    }else if (candyType === "Chocolate"){
        boughtCandyPrices.push(0.7 * weight);
        x= 0.7 * weight;
    }else if (candyType === "Toffee"){
        boughtCandyPrices.push(1.1 * weight);
        x= 1.1 * weight;
    }else if (candyType === "Chewing-gum"){
        boughtCandyPrices.push(0.03 * weight);
        x= 0.03 * weight;
    }else{
        return "You have to choose one of our products (Sweet, Chocolate, Toffee, Chewing-gum)."
    }
    return "The price of "+ candyType +" is "+ x
}

console.log(addCandy("Chocolate", 50));
console.log(addCandy("Sweet", 50));


//---------------------------Can I buy more------------------------

const amountToSpend = Math.random() * 100;
console.log("The amount to spend is "+ amountToSpend);

function canBuyMoreCandy(){
    let totalPrice = 0;
    for(let i=0; i < boughtCandyPrices.length; ++i){
        totalPrice = totalPrice + boughtCandyPrices[i];
    }
    console.log("The total price is "+ totalPrice);
    if(totalPrice >= amountToSpend){
        return "Enough candy for you!";
    }else{
        return "You can buy more, so please do!";
    }
}

console.log(canBuyMoreCandy());