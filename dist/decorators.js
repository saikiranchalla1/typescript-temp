"use strict";
// function color(value: string) { // decorator factory
//     return function (target, value) { // decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//     }
// }
function sealed(target) {
    Object.seal(target);
    Object.seal(target.prototype);
}
const decoratorA = (someBooleanFla) => {
    return (target) => {
    };
};
const printMemberName = (target, memberName) => {
    console.log(memberName);
};
const allowListOnly = (target, memberName) => {
    let currentValue = target[memberName];
    Object.defineProperty(target, memberName, {
        set: (newValue) => {
            if (!allowList.includes(newValue)) {
                return;
            }
            currentValue = newValue;
        },
        get: () => currentValue
    });
};
const allowList = ["John", "Jane"];
const enumerable = (value) => {
    return (target, memberName, propertyDescription) => {
        propertyDescription.enumerable = value;
    };
};
const deprecated = (deprecationReason) => {
    return (target, memberName, propertyDescription) => {
        return {
        // console.warn
        };
    };
};
function print(target, propertyKey, parameterIndex) {
    console.log(propertyKey + " " + parameterIndex);
}
let DecoratedPerson = class DecoratedPerson {
    constructor() {
        this._name = "John";
    }
    // decorator <- accessorDecorator
    get name() {
        return this._name;
    }
    getFullName(msg) {
    }
};
__decorate([
    printMemberName,
    allowListOnly
], DecoratedPerson.prototype, "_name", void 0);
__decorate([
    enumerable(true)
], DecoratedPerson.prototype, "name", null);
__decorate([
    deprecated(""),
    __param(0, print)
], DecoratedPerson.prototype, "getFullName", null);
DecoratedPerson = __decorate([
    sealed,
    decoratorA(true)
], DecoratedPerson);
const sai = new DecoratedPerson();
console.log(sai.name);
sai.getFullName("testing");
//# sourceMappingURL=decorators.js.map