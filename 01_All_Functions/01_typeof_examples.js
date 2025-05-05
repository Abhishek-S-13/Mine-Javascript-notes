// Basic Examples:
console.log("42 : ", typeof 42);            // "number"
console.log("hello : ",typeof "hello");       // "string"
console.log("boolen : ",typeof true);          // "boolean"
console.log("undefined : ",typeof undefined);     // "undefined"

// Special Cases:
console.log("null : ", typeof null);          // "object" (this is a known JavaScript quirk)
console.log("NaN : ",typeof NaN);           // "number" (NaN is still of type number)

// Object Types:
console.log("{} : ",typeof {});            // "object"
console.log("[] : ",typeof []);            // "object" (Arrays are objects in JavaScript)
console.log("new Date() : ",typeof new Date());    // "object"

// Function:
console.log("function(){} : ",typeof function(){});  // "function"

// Symbol and BigInt:
console.log("Symbole of id : ",typeof Symbol("id"));  // "symbol"
console.log("123n : ",typeof 123n);          // "bigint"

// With Variables:

// 1. String Variable
let name = "Ironman";
console.log("String : ",name); //  Ironman

// 2. Number Variable
let age = 30;
console.log("Number : ",age); //  30

// 3. Boolean Variable
let isLoggedIn = true;
console.log("Boolean : ",isLoggedIn); //  true

// 4. Null Variable
let result = null;
console.log("Null : ",result); //  null

// 5. Undefined Variable
let data;
console.log("Undefined : ",data); //  undefined

// 6. Array Variable
let colors = ["red", "green", "blue"];
console.log("Array var : ",colors[0]); //  red

// 7. Object Variable
let person = { name: "Ironman", age: 25 };
console.log("Object var : ",person.name); //  Ironman

// 8. Function Variable
const greet = function() {
  console.log("Hello!");
};
greet(); // Hello!

// 9. Constant Variable
const PI = 3.14;
console.log("Constant : ",PI); // 3.14

// 10. Using var (older style)
var city = "New York";
console.log("Using : ",city); // New York

//11. Symbol and BigInt
let id = Symbol("userID");
let bigNumber = 9007199254740991n;
console.log(typeof id);        //  symbol
console.log(typeof bigNumber); //  bigint