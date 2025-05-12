## 🚀 Intermediate/Advanced Questions:
```Javascript
🔁 1. What is the difference between == and ===?
-> == checks value only (with type conversion).
   === checks value and type (strict equality).

console.log(5 == "5");  // true
console.log(5 === "5"); // false
/*-------------------------------------------------------------------------*/

🌐 2. What is JSON and how is it used?
-> JSON = JavaScript Object Notation
   Used for data exchange between server and client

const jsonString = '{"name":"Alice","age":25}';
const obj = JSON.parse(jsonString);     // Convert JSON to object
const backToJson = JSON.stringify(obj); // Convert object to JSON
/*-------------------------------------------------------------------------*/

🔄 3. What is recursion in JavaScript?
-> A function calling itself to solve smaller instances of the problem.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120
/*-------------------------------------------------------------------------*/

🧠 4. What is the typeof operator used for?
-> Used to find the data type of a variable.

console.log(typeof 123);         // number
console.log(typeof "hello");     // string
console.log(typeof undefined);   // undefined
console.log(typeof null);        // object (bug in JS)
/*-------------------------------------------------------------------------*/

🚫 5. What is NaN in JavaScript?
-> Stands for "Not a Number"
   Returned when a mathematical operation fails

console.log(0 / 0);     // NaN
console.log("abc" - 1); // NaN
/*-------------------------------------------------------------------------*/

📚 6. What is the difference between for, for...in, and for...of loops?
->  let arr = [10, 20, 30];
    let obj = { a: 1, b: 2 };
// for: classic index-based loop
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// for...in: iterates over keys (object or array)
for (let key in obj) console.log(key, obj[key]);

// for...of: iterates over values (arrays, strings)
for (let value of arr) console.log(value);
/*-------------------------------------------------------------------------*/

🔍 7. What are the different scopes in JavaScript?
-> Global Scope
   Function Scope
   Block Scope (with let and const)

let x = 10; // global
function test() {
  let y = 20; // function
  if (true) {
    let z = 30; // block
  }
}
/*-------------------------------------------------------------------------*/

🌟 8. What is the spread operator (...) in JavaScript?
-> Used to expand arrays or objects.

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // [1,2,3,4,5]

let obj = { a: 1 };
let newObj = { ...obj, b: 2 }; // {a: 1, b: 2}
/*-------------------------------------------------------------------------*/

⚙️ 9. What is debouncing and throttling in JavaScript?
-> Used to control function execution (often in scroll, resize, input events).
* Debounce: Delays execution until after a pause.
* Throttle: Executes at regular intervals.
These improve performance in UI-heavy applications.
/*-------------------------------------------------------------------------*/

🔐 10. What is the difference between Object.freeze() and Object.seal()?
-> freeze(): Prevents adding, deleting, or modifying properties.
   seal(): Allows modifying, but not adding or deleting.

const obj = { name: "JS" };
Object.freeze(obj);
obj.name = "JavaScript"; // No effect
/*-------------------------------------------------------------------------*/
```
