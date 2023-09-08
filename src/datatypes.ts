// Number

let price: number = 3.14;

price = 0B101;
console.log(price);


price = 0o10;

price = 0xA;

// bigint
let big: bigint = 90920292010191010101010101011n;

// string

let firstName: string = 'John';

let description = `
    This is first line.
    This is second line.
    This is third line.
`;


description = "I'm " + firstName + " and I live in Utah!";

description = `I'm ${firstName} and I live in Utah!`;

// booleans

let pending: boolean = true; // false;


console.log(true && false);
console.log(true || false);

console.log(!pending);



// Boolean vs boolean



let employee = {
    firstName: "Jane",
    lastName: "Doe",
    age: 23,
    married: false
};

// employee = {
//     dummy: 123
// };


// employee = ["string"];

employee = {
    firstName: "John",
    lastName: "Doe",
    age: 45,
    married: false
};

let skills = ["1", "2", "3", 1, 2, 3, null];
skills.push("4");

skills.push(1);

skills = ["1", "2"];
skills = [1, 2, 3];
skills = [null, null];


let skill: [string, number] = ["DotNet", 3]; // [skillname : string, level: number] <- Tuples

let color: [number, number, number, number?] = [255, 0, 123]; // <rgb vs rgba


// Enums

const JAN = 10;
const FEB = 2;
const MARCH = 3;

enum Month {
    Jan = 1,
    Feb = 3,
    Mar = 5,
    Apr = 7
}

enum Status {
    Pending,
    Approved,
    Reviewed,
    Rejected,
    Successful
}

let month = 1;

if (month == Month.Jan) {
    console.log(`Month is January`);
}



// Never type

function raiseError(msg: string): never {
    if (msg.charAt(0) == 'a') {
        // return msg;
    } else if (msg.charAt(0) == 'b') {
        console.log(msg);
    }

    throw new Error(msg);
}

function fn(a: string | number): boolean {
    if (typeof a === "string") {
        return true;
    } else if (typeof a === "number") {
        return false;
    }

    return raiseError("");
}

// Union

function add(x: string | number, y: string | number) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }

    if (typeof x === "string" && typeof y === "string") {
        return x.concat(y);
    }

    throw new Error("Parameters should be of type string or numbers");
}

// add(true, false);
// add([], []);





