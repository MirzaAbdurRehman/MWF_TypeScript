

// Tuples :


let tuple : [number, string, boolean] = [1, "Hello", true];  // Tuple with fixed types and order
console.log(tuple);


tuple[0] = 42;          // Valid
tuple[1] = "World";    // Valid
tuple[2] = false;      // Valid

console.log(tuple);

// tuple[0] = "Invalid"; // Error: Type 'string' is not assignable to type 'number' 

let mixedTuple: [String, ...number[]] = ["Numbers", 1, 2, 3, 4, 5]; // Tuple with rest elements 
console.log(mixedTuple);



// Enums :

enum Direction {  // STRING enum
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let move: Direction = Direction.Up;
console.log("Move Direction:", move);


enum StatusCode {  // Int enums Reverse Mapping
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
console.log("Response Status Code:", StatusCode[404] );



// OOPS

// INHERITANCE WITH INTERFACES

interface Person{
    name: String;
    age: number;    
    greet(): String;
}


let user: Person = {
    name: "Ahmed",
    age: 30,
    greet(): String {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

console.log(user.name);
console.log(user.greet());


interface Employee extends Person{  // Inheritance One Interface to another Interface 
    userId: number;
    userDept: String;
}


let Employee1: Employee = {
    userId: 101,
    userDept: "IT",
    name: "Sara",
    age: 28,
    greet(): String {
        return `Hello, my name is ${this.name}, I am ${this.age} years old and I work in ${this.userDept} department.`;
    }
}

console.log(Employee1);
console.log(Employee1.greet());