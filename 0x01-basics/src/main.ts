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

// let arr: string[] = [];
// arr.push("one");

// // Tuples
// let myTuple: [string, number, boolean] = ["one", 2, true];

// let mixedArr = ["one", 2, true];

// myTuple =
//   mixedArr; /* Error - Returns an error because the types are different, but the structure is the same */
// mixedArr =
//   myTuple; /* No Error - Returns no error because in Ts when assigning a
// tuple to an array, it will only check the structure and not the types */

// Objects
// let myObj: object;
// myObj = []; // No Error
// console.log(typeof myObj);
// myObj = {}; // No Error

// const exampleObj = {
//   name: "Cleve",
//   age: 20,
//   canVote: true,
// };

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

// const infiniteLoop = () => {
//   while (!true) {}
// };

// Using the never type
// const numberOrString = (input: number | string): string => {
//   if (isNumber(input)) return `Your number is ${input}`;

//   if (isString(input)) return `Your string is ${input}`;
//   return throwError("This function only accepts a string or number");
// };

// Custom Type Guards - Used to narrow down the type of a variable
// const isNumber = (input: any): input is number => {
//   return typeof input === "number";
// };

// const isString = (input: any): input is string => {
//   return typeof input === "string";
// };

// Lesson 5 - Type Assertions
// type one = string;
// type two = string | number;
// type three = "Hello";

// Convert to more or less specific types
// let a: one = "Hello";
// let b = a as two; // b is now a string or number
// let c = b as three; // c is now literally 'Hello'

// let d = <one>"Hello"; // d is now a string
// let e = <string | number>"Hello"; // e is now a string or number

// Usecase - Assertions for narrowing
// const addOrConcat = (
//   a: number,
//   b: number,
//   c: "add" | "concat"
// ): number | string => {
//   if (c === "add") return a + b;
//   return `` + a + b;
// };

// let myVal: number = addOrConcat(1, 2, "add") as number ;

// Usecase - Double Assertions for type conversion
// 10 as string; // Error
// 10 as unknown as string; // No Error

// Usecase - Assertions for DOM manipulation
// const img = document.querySelector('img')!
// const myImg = document.querySelector('#img') as HTMLImageElement

// img.src
// myImg.src  // No Error

// Lesson 6 - Interfaces and Classes
// Classes
// class Coder {
//   name: string;
//   age: number;
//   canVote: boolean;

//   constructor(name: string, age: number, canVote: boolean) {
//     this.name = name;
//     this.age = age;
//     this.canVote = canVote;
//   }

//   greet() {
//     return `Hello ${this.name} is ${this.age} years old and can vote: ${this.canVote}`;
//   }
// }

// const coder1 = new Coder("Cleve", 20, true);
// console.log(coder1.greet());

// Visibility Modifiers
// class coder {
//   constructor(
//     public readonly name: string,
//     private age: number,
//     protected lang: string = "TypeScript",
//     protected canVote: boolean
//   ) {
//     this.name = name;
//     this.age = age;
//     this.canVote = canVote;
//     this.lang = lang;
//   }

//   greet() {
//     return `Hello ${this.name} is ${this.age} years old and can vote: ${this.canVote}`;
//   }

//   public getAge() {
//     return this.age;
//   }
// }

// const coder1 = new coder("Cleve", 20, "JS", true);
// console.log(coder1.greet());
// console.log(coder1.getAge());
// console.log(coder1.aanVote)ge);
// console.log(coder1.c;

// EXtening Classes
// class WebDev extends coder {
//   constructor(
//     public computer: string,
//     name: string,
//     lang: string,
//     age: number,
//     canVote: boolean
//   ) {
//     super(name, age, "", canVote);
//     this.computer = computer;
//   }

//   getLang() {
//     return this.lang;
//   }
// }

/////////////////////////////////////////////////

// Interfaces
// interface Musician {
//   name: string;
//   instrument: string;
//   play(action: string): string;
// }

// class Guitarist implements Musician {
//   name: string;
//   instrument: string;

//   constructor(name: string, instrument: string) {
//     this.name = name;
//     this.instrument = instrument;
//   }

//   play(action: string): string {
//     return `${this.name} ${action} the ${this.instrument}`;
//   }
// }

// const guitarist = new Guitarist("Cleve", "Guitar");
// console.log(guitarist.play("plays"));

/////////////////////////////////////////////////////////

// Static Class Members
// class Person {
//   static count: number = 0;

//   static getCount() {
//     return Person.count;
//   }

//   public id: number;

//   constructor(public name: string) {
//     this.id = Person.count++;
//   }
// }

// const John = new Person("John");
// const Jane = new Person("Jane");
// const Jack = new Person("Jack");

// console.log(Person.count);
// console.log(John.id);
// console.log(Jane.id);
// console.log(Jack.id);

///////////////////////////////////////////////////////
// Getters and Setters
// class Bands {
//   private dataState: string[];

//   constructor() {
//     this.dataState = [];
//   }

//   public get data(): string[] {
//     return this.dataState;
//   }

//   public set data(value: string[]) {
//     if (
//       Array.isArray(value) &&
//       value.every((item) => typeof item === "string")
//     ) {
//       this.dataState = value;
//       return;
//     } else throw new Error("Param is not an array of strings");
//   }
// }

// const MyBands = new Bands();
// MyBands.data = ["Metallica", "Slipknot", "Korn", "Limp Bizkit"];
// console.log(MyBands.data);
// MyBands.data = [...MyBands.data, "ZZ Top"];
// console.log(MyBands.data);
// MyBands.data = "Van Halen"; // Error

///////////////////////////////////////////////////////
// Index Signatures

// interface TransactionObj {
//   [index: string]: number;
// }

// interface TransactionObj {
//   pizza: number;
//   books: number;
//   job: number;
// }

// const transactionToday: TransactionObj = {
//   pizza: -10,
//   books: -5,
//   job: 50,
// };

// const prop: string = "pizza";
// console.log(prop);

// console.log(transactionToday.pizza);
// console.log(transactionToday["pizza"]);
// console.log(transactionToday[prop]); //

// const todaysNet = (transactions: TransactionObj): number => {
//   let total = 0;
//   for (const transaction in transactions) {
//     total += transactions[transaction];
//     // total += transactions.transaction
//   }
//   return total;
// };

///////////////////////////////////////////////////////////////

interface Student {
  [index: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Cleve",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test)

// for (const key in student) {
//   console.log(`${key}: ${student[key]}`);
// }

// Key Of assertion
interface Student1 {
  // [index: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student1: Student1 = {
  name: "Dev",
  GPA: 4.5,
  classes: [200, 300],
};

// for (const key in student1) {
//   console.log(`${key}: ${student1[key as keyof Student1]}`); // keyof creates a union type
// }

Object.keys(student1).map((key) => {
  console.log(`${key}: ${student1[key as keyof typeof student1]}`);
});

const logStudentKey = (student1: Student1, key: keyof Student1): void => {
  console.log(`Student ${key}: ${student1[key]}`);
};

logStudentKey(student1, "name");

//////////////////////////////////////////////////////
// Record Utility type

// interface Incomes {
//   [key: string]: number
// }

type Streams = "salary" | "bonus" | "sidehustle";
type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 250,
};

for (const revenue in monthlyIncomes) {
  console.log(`${revenue}: ${monthlyIncomes[revenue as keyof Incomes]}`);
}

///////////////////////////////////////////////////////////////////////////////
// Lesson 8 - Generics
const echoStr = (arg: string): string => arg; // echoes a string
// Generic
const echo = <T>(arg: T): T => arg; // echoes any argument passed

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj({ name: "Jhhn" }));
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj(null));
