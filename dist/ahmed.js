"use strict";
// Tuples :
Object.defineProperty(exports, "__esModule", { value: true });
let tuple = [1, "Hello", true]; // Tuple with fixed types and order
console.log(tuple);
tuple[0] = 42; // Valid
tuple[1] = "World"; // Valid
tuple[2] = false; // Valid
console.log(tuple);
// tuple[0] = "Invalid"; // Error: Type 'string' is not assignable to type 'number' 
let mixedTuple = ["Numbers", 1, 2, 3, 4, 5]; // Tuple with rest elements 
console.log(mixedTuple);
// Enums :
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
let move = Direction.Up;
console.log("Move Direction:", move);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log("Response Status Code:", StatusCode[404]);
let user = {
    name: "Ahmed",
    age: 30,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};
console.log(user.name);
console.log(user.greet());
let Employee1 = {
    userId: 101,
    userDept: "IT",
    name: "Sara",
    age: 28,
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I work in ${this.userDept} department.`;
    }
};
console.log(Employee1);
console.log(Employee1.greet());
//# sourceMappingURL=ahmed.js.map