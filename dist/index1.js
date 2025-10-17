"use strict";
// Object Types
Object.defineProperty(exports, "__esModule", { value: true });
let person = {
    name: "Hamza",
    age: 25,
    isActive: true
};
console.log(person);
console.log(person['name']);
// Union Types
let id;
id = "12345"; // Valid
console.log("ID as string:", id);
id = 12345; // Valid
console.log("ID as number:", id);
id = true; // Valid
console.log("ID as boolean:", id);
id = { pnum: "1234567809" }; // Valid
console.log("ID as Objext:", id);
let cordinates = {
    length: 10,
    width: 5
};
console.log(cordinates);
function calculateArea(rect) {
    return rect.length * rect.width;
}
calculateArea(cordinates);
console.log("Area of Rectangle:", calculateArea(cordinates));
let myBook = {
    title: "TypeScript Basics",
    author: "John Doe"
};
// myBook.title = "New Title";  // Error: Cannot assign to 'title' because it is a read-only property.
myBook.author = "Abdullah"; // Valid
let user1 = {
    username: "user123"
    // email is not provided
};
console.log(user1);
let personDetails = {
    name: "Alice",
    age: 30
};
console.log(personDetails);
//# sourceMappingURL=index1.js.map