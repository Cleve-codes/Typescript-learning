// Lesson 1
// let userName = "Cleve";
// console.log(userName);

// let a: number = 12;
// let b: number = 6;
// let c: number = 17;

// console.log(a / b);
// console.log(c * b);

// Lesson 2 - Types (string, number, boolean, any, union)
let myName: string = "Cleve";
let myAge: number;
let canVote: boolean;
let albums: string | number;

myName = "Isaac";
myAge = 20;
canVote = true;
albums = 34;

const sum = (a: number, b: number) => {
  return a + b;
};

let postID: string | number;
let isActive: number | boolean | string;

let regExp: RegExp = /\w+/g;

// myName = 89 // Error
// myName = 'Isaac' // No Error
