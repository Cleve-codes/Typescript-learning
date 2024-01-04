"use strict";
// Lesson 1
// let userName = "Cleve";
// console.log(userName);
const student = {
    name: "Cleve",
    GPA: 3.5,
    classes: [100, 200],
};
const student1 = {
    name: "Dev",
    GPA: 4.5,
    classes: [200, 300],
};
// for (const key in student1) {
//   console.log(`${key}: ${student1[key as keyof Student1]}`); // keyof creates a union type
// }
Object.keys(student1).map((key) => {
    console.log(`${key}: ${student1[key]}`);
});
const logStudentKey = (student1, key) => {
    console.log(`Student ${key}: ${student1[key]}`);
};
logStudentKey(student1, "name");
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250,
};
for (const revenue in monthlyIncomes) {
    console.log(`${revenue}: ${monthlyIncomes[revenue]}`);
}
///////////////////////////////////////////////////////////////////////////////
// Lesson 8 - Generics
const echoStr = (arg) => arg; // echoes a string
// Generic
const echo = (arg) => arg; // echoes any argument passed
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj({ name: "Jhhn" }));
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj(null));
