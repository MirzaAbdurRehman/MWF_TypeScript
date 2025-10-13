
// Data Types in TypeScript  // Type Annotation / Type Inference

let message: String = "Hello, TypeScript!";  // Type Annotation
let age: number = 25;  // Type Annotation
let isStudent = true;  // Type Inference  not Defined Data type
let isCheck: null = null;  // Type Annotation
let isUndefined: undefined = undefined;  // Type Annotation

console.log(message, age, isStudent, isCheck, isUndefined);


function greetUser(person: String, age: number): String {  // Type Annotation
    return `Hello, ${person}. You are ${age} years old.`;
}


console.log(greetUser("aBDULLAH", 21)); 


let flexible: any = "This can be anything";  // 'any' type
flexible = 42;  // Now it's a number
flexible = true;  // Now it's a boolean
console.log(flexible);



// Never Type
function throwError(message: string): never {
    throw new Error(message);
}

function infiniteLoop(): never {
    while (true) {
        console.log("This loop will run forever");
    }
}


try{
    throwError("This is a custom error message");
}catch(error: any){
    console.log(error.message);
}


// infiniteLoop();  // Uncommenting this will cause an infinite loop

// Array Data Types



let numbers: number[] = [1, 2, 3, 4, 5];  // Array of numbers

console.log(numbers);

let mixedArray: (number | string | boolean)[] = [1, "two", true, 4, "five"];  // Array of mixed types
console.log(mixedArray);



let names: Array<string> = ["Alice", "Bob", "Charlie"];  // Generic array type
console.log(names);
names.push("David");
console.log(names);
names.pop();
console.log(names);




