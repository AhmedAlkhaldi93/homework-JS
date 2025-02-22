
//-------------------------------------Flight booking fullname--------------------------------
function getFullname(firstname, surname){
    return firstname + " " + surname;
}
const fullname1 = getFullname("Ahmed","Alkhaldi");
const fullname2 = getFullname("Mohammed","Ali");

console.log(fullname1 +"\n"+ fullname2);
console.log("The first exercise is finished.\n--------------------------------\n\n")

//--------------------------------------Formal fullname---------------------------------------

function getFullFormalName(firstname, surname, useFormalName){
    if(useFormalName){
        return "Lord " +firstname + " " + surname;
    }else{
        return firstname + " " + surname;
    }
}
const fullFormalName1 = getFullFormalName("Ahmed","Alkhaldi", true);
const fullFormalName2 = getFullFormalName("Mohammed","Ali", false);

console.log(fullFormalName1 +"\n"+ fullFormalName2);
console.log("The second exercise is finished.\n--------------------------------\n\n")


//-----------------------------------Formal fullname for men & women----------------------------

function getFullFormalName2(firstname , surname, useFormalName, gender){  //choose true for formal and "gender" true for male and false for female 
   
    if(typeof firstname == "string" && typeof surname == "string" && firstname.trim() !== "" && surname.trim() !== ""){
        const fullNameIs = firstname + " " + surname;
        if(useFormalName){
            if(gender === "male"){
                return "Lord " + fullNameIs;
            }else if(gender === "female"){
                return "Lady " + fullNameIs;
            }else{
                return "Please specify your gender by writing (male or female).";
            }
        }else if(!useFormalName){
            return fullNameIs;
        }else{
            return "Please specify if you want the name formal or not by writing (true or false).";
        }


    }else{
       return "Please inter your first name and surname as string (Your name must be a non-empty string).";
    }
    
}
const full_name1 = getFullFormalName2("Ahmed","Alkhaldi", true, "male");
const full_name2 = getFullFormalName2("Julia","Lopez", false, "female");

console.log(full_name1 +"\n"+ full_name2);



