const myFavDish = ["Margherita Pizza","Maqluba","Musakhan","Mansaf"];

const myFavDishId = document.getElementById("myFavDishes");

for(let i=0; i < myFavDish.length; i++){
    const li = document.createElement("li");
    li.textContent = myFavDish[i];
    myFavDishId.appendChild(li);
}