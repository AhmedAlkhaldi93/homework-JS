let lastName = undefined;
const todo = [];

function getReply(command){
    if(lastName === command.split("is ")[1]){
        return "nice to meet you again "+lastName
    }else if(command.includes("Hello my name is ")){
        lastName = command.split("is ")[1];
        return "nice to meet you "+lastName
    }else if(command === "What is my name"){
        if(lastName == undefined){
            return "You did not introduce yourself yet"
        }else{
            return "Your name is "+lastName
        }
    }else if (command.startsWith("Add") && command.includes("to my todo")){
        const todoAdd = command.replace("Add", "").replace("to my todo", "").trim();
        todo.push(todoAdd);
        return "My list is " + todo
    }else if(command.startsWith("Remove") && command.includes("from my todo")){
        const todoRemove = command.replace("Remove ", "").replace(" from my todo", "");
        for(let i=0; i < todo.length; i++){
            if(todo[i] == todoRemove){
                todo.splice(i, 1);
                return "Removed " + todoRemove + " from your todo"
            }
        }
    }else if(command === "What is on my todo?"){
        let text = "";
        for(let i=0; i < todo.length; i++){
            text = todo.join(" and ");
        }
        
        return text
    }else if(command === "What day is it today?"){
        const day = new Date().getDate();
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return day + ". of " + monthNames[month] + " " + year
    }else if(command.includes("What is ")){
        const equation = command.replace("What is ", "");
        if(equation.includes("+")){
            const numbers = equation.split("+");
            const result = Number(numbers[0]) + Number(numbers[1]);
            return result
        }else if(equation.includes("*")){
            const numbers = equation.split("*");
            const result = Number(numbers[0]) * Number(numbers[1]);
            return result
        }else if(equation.includes("/")){
            const numbers = equation.split("/");
            const result = Number(numbers[0]) / Number(numbers[1]);
            return result
        }
    }else if(command.includes("Set a timer for ")){
        const timer = Number(command.replace("Set a timer for", "").replace("minutes", "").trim());
        const timerSecond = timer * 60000;
        function timerDone(){
            console.log("Timer done!");
        }
        setTimeout(timerDone, timerSecond);
        return "Timer set for " + timer + " minutes"
    }else{
        return "I'm sorry, but I couldn't understand you. Could you please enter your input again?"
    }
}

console.log(getReply("Hello my name is Ahmed"));
console.log(getReply("Hello my name is Ahmed"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add sleeping to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 3 + 5"));
console.log(getReply("What is 9 / 3"));
console.log(getReply("What is 3 * 3"));
console.log(getReply("Set a timer for 0.2 minutes"));