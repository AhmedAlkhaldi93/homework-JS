
const boughtCandyPrices = [];

function addCandy(candyType, weight){
    let pricePerGram;
    if (candyType === "Sweet"){
        pricePerGram = 0.5 * weight;
        boughtCandyPrices.push(pricePerGram);
    }else if (candyType === "Chocolate"){
        pricePerGram = 0.7 * weight;
        boughtCandyPrices.push(pricePerGram);
    }else if (candyType === "Toffee"){
        pricePerGram = 1.1 * weight;
        boughtCandyPrices.push(pricePerGram);
    }else if (candyType === "Chewing-gum"){
        pricePerGram = 0.03 * weight;
        boughtCandyPrices.push(pricePerGram);
    }else{
        return "You have to choose one of our products (Sweet, Chocolate, Toffee, Chewing-gum)."
    }
    return "The price of "+ candyType +" is "+ pricePerGram
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