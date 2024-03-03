// Equality and Inequality test with strings 

let string1 : string = "hello";
let string2 : string = "Hello";

// Equality Test 
// Test 1:
console.log('Is string1 == "hello"? I predict True.');
console.log(string1 == "hello");

// Test 2 :
console.log('Is string2 == "Hello"? I predict True.');
console.log(string2 == "Hello");

// Inequality Test 
// Test 3 :
console.log('Is string1 == string2? I predict False.');
console.log(string1 == string2);

// Test using lower case function 

let lowercaseString1 : string = "HELLO";
let lowercaseString2 : string = "TypeScript";

// Test 4 : 
console.log('Is lowercaseString1.toLowerCase == "hello"? I predict True.');
console.log(lowercaseString1.toLowerCase() == "hello");

// Test 5 :
console.log('Is lowercaseString2.toLowerCase == "typescript"? I predict True.');
console.log(lowercaseString2.toLowerCase() == "typescript");

// Test 6 :
console.log('Is lowercaseString1 == "hello"? I predict False.');
console.log(lowercaseString1 == "hello");

// Numerical Test 

let number1 : number = 7;
let number2 : number = 10;

// (Equality)

// Test 7 :
console.log('Is number1 == 7? I predict True.');
console.log(number1 == 7);

// Test 8 :
console.log('Is number2 == 10? I predict True.');
console.log(number2 == 10);

// (Inequality)

// Test 9 :
console.log('Is number1 == number2? I predict False.');
console.log(number1 == number1);

// Test 10 :
console.log('Is number1 == 20? I predict False.');
console.log(number1 == 20);

// (Greater than)

// Test 11 :
console.log('Is number1 > 5? I predict True.');
console.log(number1 > 5);

// Test 12 :
console.log('Is number2 > 8? I predict True.');
console.log(number2 > 8);

// Test 13 :
console.log('Is number1 > 10? I predict False.');
console.log(number1 > 10);

// Test 14 :
console.log('Is number2 > 20? I predict False.');
console.log(number2 > 20);

// (Less than)

// Test 15 :
console.log('Is number1 < 12? I predict True.');
console.log(number1 < 12);

// Test 16 :
console.log('Is number2 < 15? I predict True.');
console.log(number2 < 15);

// Test 17 :
console.log('Is number1 < 6? I predict False.');
console.log(number1 < 6);

// Test 18 :
console.log('Is number2 < 7? I predict False.');
console.log(number2 < 7);

// (Greater than or equal to)

// Test 19 :
console.log('Is number1 >= 7? I predict True.');
console.log(number1 >= 7);

// Test 20 :
console.log('Is number2 >= 8? I predict True.');
console.log(number2 >= 8);

// Test 21 :
console.log('Is number1 >= 10? I predict False.');
console.log(number1 >= 10);

// Test 22 :
console.log('Is number2 >= 15? I predict False.');
console.log(number2 >= 15);

// (Less than or equal to)

// Test 23 :
console.log('Is number1 <= 10? I predict True.');
console.log(number1 <= 10);

// Test 24 :
console.log('Is number2 <= 10? I predict True.');
console.log(number2 <= 10);

// Test 25 :
console.log('Is number1 <= 5? I predict False.');
console.log(number1 <= 5);

// Test 26 :
console.log('Is number2 <= 8? I predict False.');
console.log(number2 <= 8);

// Test using "AND" and "OR" operators 

let x : number = 5;
let y : number = 15;

// "AND" operator

// Test 27 :
console.log("Is x == 5 && y == 15? I predict True.");
console.log(x == 5 && y == 15);

// Test 28 : 
console.log("Is x > 10 && y < 20? I predict False.");
console.log(x > 10 && y < 20);

// "OR" operator

// Test 29 :
console.log("Is x < 10 || y > 10? I predict True.");
console.log(x < 10 || y > 10);

// Test 30 : 
console.log("Is x == 10 || y == 20? I predict False.");
console.log(x == 10 || y == 20);

// Test whether an item is in an array 

let fruits : string[] = ["Apple", "Banana", "Orange", "Strawberry"];

// Test 31 : 
console.log('Is "Banana" in the fruits array? I predict True.');
console.log(fruits.includes("Banana"));

// Test 32 : 
console.log('Is "Grapes" in the fruits array? I predict False.');
console.log(fruits.includes("Grapes"));

// Test whether an item is not in fruits array 

// Test 33 : 
console.log('Is "Watermelon" not in the fruits array? I predict True.');
console.log(!fruits.includes("Watermelon"));

// Test 32 : 
console.log('Is "Orange" not in the fruits array? I predict False.');
console.log(!fruits.includes("Orange"));