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

let arr: string[] = [];
arr.push("one");

// Tuples
let myTuple: [string, number, boolean] = ["one", 2, true];

let mixedArr = ["one", 2, true];

// myTuple =
//   mixedArr; /* Error - Returns an error because the types are different, but the structure is the same */
// mixedArr =
//   myTuple; /* No Error - Returns no error because in Ts when assigning a
// tuple to an array, it will only check the structure and not the types */

// Objects
let myObj: object;
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
type Person = {
  name: string;
  age: (string | number)[];
  canVote: boolean;
};

let person: Person = {
  name: "Cleve",
  age: [20, "twenty"],
  canVote: true,
};

person = {
  name: "Isaac",
  age: [20, "twenty"],
  canVote: true,
};



