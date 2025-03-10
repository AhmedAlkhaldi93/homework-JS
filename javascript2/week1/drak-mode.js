const clickBot = document.getElementById("click");
const textCol = document.getElementById("textColor");

clickBot.addEventListener("click", function(){
    if(document.body.style.backgroundColor === "" || document.body.style.backgroundColor === "white"){
        document.body.style.backgroundColor = "black";
        textCol.style.color = "white";
    }else{
        document.body.style.backgroundColor = "white";
        textCol.style.color = "black";
    }
});