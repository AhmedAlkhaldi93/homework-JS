
//-----------------------------------------STUDENT MANAGER------------------addStudentToClass function

const class07Students = [];
function addStudentToClass(studentName) {
if(class07Students.length < 6  || studentName === "Queen"){
    if(class07Students.includes(studentName)){
        return "there is the same name."
    }else if(studentName === ""){
        return "You can't add empty name."
    }else{
        class07Students.push(studentName);
        return class07Students;
    }
}else{
    return "The class is full."
}
}

console.log(addStudentToClass("Ahmed"));
console.log(addStudentToClass("Moh"));
console.log(addStudentToClass("Moh"));
console.log(addStudentToClass("Rob"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Rami"));
console.log(addStudentToClass("Sam"));
console.log(addStudentToClass("Yousef"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("www"));

//-----------------------------------------STUDENT MANAGER-------------------getNumberOfStudents function

function getNumberOfStudents(){
    if(class07Students.includes("Queen")){
        console.log("The number of students is " + (class07Students.length - 1) +" and Queen.");
    }else{
        console.log("The number of students is " + class07Students.length);
    }
}
getNumberOfStudents();
