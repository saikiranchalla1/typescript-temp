"use strict";
// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }
// ES 6
class Person {
    constructor(firstName, lastName, _age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = _age;
        this.birthDate = new Date();
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get age() {
        return this.age;
    }
    set age(theAge) {
        if (theAge <= 0 || theAge >= 1000) {
            throw new Error();
        }
        this.age = theAge;
    }
    get firstname() {
        return this.firstName;
    }
    get lastname() {
        return this.lastName;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}`;
    }
}
let john = new Person("John", "Doe", 23);
// john = {
//     firstName: "Jane",
//     lastName: "Doe",
//     age: 23,
//     getFullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }
// console.log(john.firstName);
// john.birthDate = new Date();
class Employee extends Person {
    constructor(firstName, lastName, age, jobTitle) {
        super(firstName, lastName, age);
        this.jobTitle = jobTitle;
    }
    describe() {
        return `This is ${this.firstname} and I work as ${this.jobTitle}`;
    }
}
//# sourceMappingURL=classes.js.map