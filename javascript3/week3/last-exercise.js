class person1{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

function handleSum(){
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const ageInput = document.getElementById("age");
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;

    const myPerson = new person1(firstName, lastName, age);
    fetch("https://hackyourfuture-etdeezbnfphqfmgv.westeurope-01.azurewebsites.net/person",{
        body: JSON.stringify(myPerson),
        headers: {
            "content-type": "application/json"
        },
        method: 'POST'
    })
    .then(e => console.log(e))
    .catch();
}