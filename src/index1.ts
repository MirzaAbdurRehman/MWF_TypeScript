
// Object Types

interface Person{
    name: String;
    age: number;
    isActive: boolean;
}

let person: Person = {
    name: "Hamza",
    age: 25,
    isActive: true
}


console.log(person);
console.log(person['name']);


// Union Types
let id: string | number | boolean | object;

id = "12345";  // Valid
console.log("ID as string:", id);

id = 12345;    // Valid
console.log("ID as number:", id);  

id = true;     // Valid
console.log("ID as boolean:", id);  

id = { pnum: "1234567809" }; // Valid
console.log("ID as Objext:", id);



// Type Aliases  // CUSTOMIZED DATA TYPES

type Rectangle = {
    length: number;
    width: number;
}

let cordinates: Rectangle = {
    length: 10,
    width: 5
}

console.log(cordinates);

function calculateArea(rect: Rectangle): number {
    return rect.length * rect.width;
}

calculateArea(cordinates);
console.log("Area of Rectangle:", calculateArea(cordinates));


// Read Only Properties

interface Book {
    readonly title: string;
    author: string;
}

let myBook: Book = {
    title: "TypeScript Basics",
    author: "John Doe"
}

// myBook.title = "New Title";  // Error: Cannot assign to 'title' because it is a read-only property.
myBook.author = "Abdullah";  // Valid


// Optional Properties

interface  User{
    username: string;
    email?: string;  // Optional property
}

let user1: User = {
    username: "user123"
    // email is not provided
}

console.log(user1);



// Intersection Types

type Name = {name: string};
type Age = {age: number};

type PersonDetails = Name & Age; // Intersection type

let personDetails: PersonDetails = {
    name: "Alice",
    age: 30
}

console.log(personDetails);






