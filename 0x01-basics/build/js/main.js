"use strict";
// Lesson 1
// let userName = "Cleve";
// console.log(userName);
// let a: number = 12;
// let b: number = 6;
// let c: number = 17;
// console.log(a / b);
// console.log(c * b);
// Lesson 2 - Types (string, number, boolean, any, union)
// let myName: string = "Cleve";
// let myAge: number;
// let canVote: boolean;
// let albums: string | number;
// myName = "Isaac";
// myAge = 20;
// canVote = true;
// albums = 34;
// const sum = (a: number, b: number) => {
//   return a + b;
// };
// let postID: string | number;
// let isActive: number | boolean | string;
// let regExp: RegExp = /\w+/g;
// myName = 89 // Error
// myName = 'Isaac' // No Error
// Lesson 3 - Arrays, Tuples, Enums
// let names = ["one", "two", "three"];
// let mixed = ["one", 2, "three", 4];
// let moreMixed = ["one", 2, "three", 4, true, false, "seven"];
// names.push("four");
// names.push(5); // Error
// mixed.push("five");
// mixed.push(6);
// mixed.push(true);
// moreMixed.push("eight");
// moreMixed.push(9);
// moreMixed.push(false);
// moreMixed.push({ name: "Cleve" }); // Error
let arr = [];
arr.push("one");
// Tuples
let myTuple = ["one", 2, true];
let mixedArr = ["one", 2, true];
// myTuple =
//   mixedArr; /* Error - Returns an error because the types are different, but the structure is the same */
// mixedArr =
//   myTuple; /* No Error - Returns no error because in Ts when assigning a
// tuple to an array, it will only check the structure and not the types */
// Objects
let myObj;
myObj = []; // No Error
console.log(typeof myObj);
myObj = {}; // No Error
const exampleObj = {
    name: "Cleve",
    age: 20,
    canVote: true,
};
// exampleObj.name = 20; // Error
// exampleObj.age = "Cleve"; // Error
// exampleObj.canVote = "Yes"; // Error
// Object Types annotations
// type Person = {
//   name: string;
//   age: (string | number)[];
//   canVote: boolean;
// };
// interface PersonInterface {
//   name?: string;
//   age: (string | number)[];
//   canVote: boolean;
// }
// let person: Person = {
//   name: "Cleve",
//   age: [20, "twenty"],
//   canVote: true,
// };
// let person2: PersonInterface = {
//   name: "Cleve",
//   age: [20, "twenty"],
//   canVote: true,
// };
// const greetPerson = (person: Person) => {
//   return `Hello ${person.name}`!;
// };
// const greetPerson2 = (person: PersonInterface) => {
//   if (person.name) {
//     return `Hello ${person.name?.toUpperCase()}`!;
//   }
//   return `Hello`!;
// };
// console.log(greetPerson(person));
// console.log(greetPerson2(person2));
// Enums - Are added to the language at runtime
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// console.log(Direction.Up); // 0
// Lesson 4 - Functions
// Type Aliases - Represent a type that already exists with a different name
// type StringOrNum = string | number;
// type StringOrNumArr = StringOrNum[];
// type Person = {
//   name: string;
//   age: StringOrNumArr;
//   canVote: boolean;
// };
// Literal Types - Represent a value that is a string or number
// type Direction = "up" | "down" | "left" | "right";
// let userName: "Cleve" | "Isaac" | "Mzee";
// userName = 'Msee' // Error
// Functions
// function with return type
// const add = (a: number, b: number): number => {
//   return a + b;
// };
// add(5, 10);
// function with no return type
// const logMsg = (msg: any): void => {
//   console.log(msg);
// };
// logMsg('Hello World');
// logMsg(add(5, 10));
// logMsg(add(5, '10')) // Error
// function types
// type mathFunc = (a: number, b: number) => number;
// let multiplicationFunc: mathFunc = (a, b) => {
//   return a * b;
// };
// logMsg(multiplicationFunc(5, 10));
// interface MathFuncInterface {
//   (a: number, b: number): number;
// }
// let subtractionFunc: MathFuncInterface = (a, b) => {
//   return a - b;
// }
// Optional Parameters
// const addAll = (a: number, b: number, c?: number): number => {
//   if (typeof c !== "undefined") {
//     return a + b + c;
//   }
//   return a + b;
// };
// Default Parameters
// const sumAll = (a: number, b: number, c: number = 2): number => {
//   return a + b + c;
// };
// const sumAll2 = (a: number = 10, b: number, c: number = 2): number => {
//   return a + b + c;
// }
// logMsg(sumAll2(1,2)) // 5 - a = 1, b = 2, c = 2
// logMsg(sumAll2(undefined, 2)) // 14 - a = 10, b = 2, c = 2
// logMsg(addAll(5, 10));
// logMsg(sumAll(5, 10));
// logMsg(addAll(5, 10, 15));
// logMsg(sumAll(5, 10, 15));
// Rest Parameters
// const sumAll = (...nums: number[]): number => {
//   return nums.reduce((acc, curr) => acc + curr, 0);
// };
// const sumAll2 = (a: number, b: number, ...nums: number[]): number => {
//   return nums.reduce((acc, curr) => acc + curr, a + b);
// };
// console.log(sumAll(1, 2, 1, 3)); // 7
// console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
// The never type
// const throwError = (msg: string): never => {
//   throw new Error(msg);
// };
// console.log(throwError("Error Message"));
const infiniteLoop = () => {
    while (!true) { }
};
// Convert to more or less specific types
let a = "Hello";
let b = a; // b is now a string or number
let c = b; // c is now literally 'Hello'
let d = "Hello"; // d is now a string
let e = "Hello"; // e is now a string or number
// Usecase - Assertions for narrowing
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return `` + a + b;
};
let myVal = addOrConcat(1, 2, "add");
// Usecase - Double Assertions for type conversion
// 10 as string; // Error
// 10 as unknown as string; // No Error
// Usecase - Assertions for DOM manipulation
const img = document.querySelector('img');
const myImg = document.querySelector('#img');
img.src;
myImg.src; // No Error
