class person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
    getInfo() {
        console.log(`The first name is : ${this.name}, the last name is : ${this.lastName}`);
    }
    getFullName() {
        console.log(`${this.name} ${this.lastName}`);
    }
}

const value1 = new person("Ahmed", "Alkhaldi");
console.log(value1);
console.log(value1.name);
value1.getInfo();
value1.getFullName();