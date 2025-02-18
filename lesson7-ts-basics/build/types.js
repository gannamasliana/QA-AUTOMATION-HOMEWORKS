"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const num = 1;
let num2;
num2 = 2;
num2 = 3;
console.log(num, num2);
let str = 'Hello';
//str = 4;
str = 'World';
console.log(str);
const obj = {
    a: 1,
    b: 'Hello'
};
//obj.c = 3;
obj.a = 2;
console.log(obj);
const obj2 = {};
obj2.a = 1;
obj2.b = 'some string';
obj2.c = '';
console.log(obj2);
const arr = [1, 2, 3];
console.log(arr.sort((a, b) => a - b));
let union;
//union = 2;
union = 'loaded';
union = 'loading';
console.log(union);
console.log(enums_1.Direction.Up, enums_1.Direction.Down, enums_1.Direction.Left, enums_1.Direction.Right);
const someMap = new Map();
someMap.set('one', 1);
someMap.set('two', 2);
const someSet = new Set();
someSet.add(1);
someSet.add(2);
console.log(someMap, someSet);
const someArray = [];
someArray.push(1);
someArray.push(2);
const someAnotherArray = ['string 1', 'string 2'];
console.log(someArray, someAnotherArray);
/* eslint-enable @typescript-eslint/consistent-type-definitions */
const someType1 = {};
someType1.a = 1;
// This definition will not work because of the members are not optional
// const someType2: SomeTypeWithMandatoryMembers = {};
// This will work because we are using Partial, i.e. we say to TS that we want to use only some members of the type
const someType2 = {};
someType2.c = 2;
console.log(someType1, someType2);
