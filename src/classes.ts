// function Person(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }


// ES 6
class Person {
    // private firstName;
    // private lastName;
    // private age;

    readonly birthDate: Date;

    constructor(private firstName: string, private lastName: string, private _age: number) {
        this.birthDate = new Date();
    }

    public getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    public get age() {
        return this.age;
    }

    public set age(theAge: number) {
        if (theAge <= 0 || theAge >= 1000) {
            throw new Error();
        }


        this.age = theAge;
    }

    public get firstname() {
        return this.firstName;
    }

    public get lastname() {
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
    constructor(firstName: string, lastName: string, age: number, private jobTitle: string) {
        super(firstName, lastName, age);
    }

    describe(): string {
        return `This is ${this.firstname} and I work as ${this.jobTitle}`;
    }
}
