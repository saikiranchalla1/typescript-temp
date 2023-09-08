
let msg: string = "Hello, World!";
console.log(msg);


// function add(x: number, y: number): number {
//     return x + y;
// }

add(1, 2);
// add(1, "2");
// add("1", "2");

let greeting: (name: string) => string;

greeting = function (name: string) {
    return `Hi, ${name}`;
}

let counter = 0;

function setCounter(max = 100) {

}

let items = [1, 2, 3, 4, null];


