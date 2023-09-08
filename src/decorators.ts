// function color(value: string) { // decorator factory
//     return function (target, value) { // decorator

import { Employee } from "./namespaces";

//     }
// }
function sealed(target: Function) {
    Object.seal(target);
    Object.seal(target.prototype);
}

const decoratorA = (someBooleanFla: boolean) => {
    return (target: Function) => {

    }
}

const printMemberName = (target: any, memberName: string) => {
    console.log(memberName);
}

const allowListOnly = (target: any, memberName: string) => {
    let currentValue: any = target[memberName];


    Object.defineProperty(target, memberName, {
        set: (newValue: any) => {
            if (!allowList.includes(newValue)) {
                return;
            }
            currentValue = newValue;
        },
        get: () => currentValue
    });
}

const allowList = ["John", "Jane"];


const enumerable = (value: boolean) => {
    return (target: any, memberName: string, propertyDescription: PropertyDescriptor) => {
        propertyDescription.enumerable = value;
    }
}

const deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescription: PropertyDescriptor) => {
        return {
            // console.warn
        }
    }
}

function print(target: Object, propertyKey: string, parameterIndex: number) {
    console.log(propertyKey + " " + parameterIndex);
}
@sealed
@decoratorA(true)
class DecoratedPerson {

    @printMemberName
    @allowListOnly
    private _name: string = "John";

    constructor() {
    }

    // decorator <- accessorDecorator
    @enumerable(true)
    get name() {
        return this._name;
    }

    @deprecated("")
    getFullName(@print msg: string) {

    }
}

const sai = new DecoratedPerson();
console.log(sai.name);
sai.getFullName("testing");

let emp1: Employee;
