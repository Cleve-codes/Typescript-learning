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
for (const key in student1) {
    console.log(`${key}: ${student1[key]}`); // keyof creates a union type
}
Object.keys(student1).map((key) => {
    console.log(`${key}: ${student1[key]}`);
});
