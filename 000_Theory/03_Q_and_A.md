## 🚀 Intermediate/Advanced Questions:
```Javascript
🔄 1. What is the difference between call(), apply(), and bind()?
-> These are used to set the value of this in a function.

function greet() {
  console.log(`Hello, ${this.name}`);
}
const user = { name: "Alice" };

greet.call(user);  // Hello, Alice
greet.apply(user); // Hello, Alice
const boundFunc = greet.bind(user);
boundFunc();       // Hello, Alice
/*-------------------------------------------------------------------------*/
Method	    Executes Immediately?	    Arguments
call	    Yes	                        Comma-separated
apply	    Yes	                        Array of args
bind	    No (returns function)	    Comma-separated
/*-------------------------------------------------------------------------*/

🔁 2. What is the event loop in JavaScript?
-> JavaScript is single-threaded but handles async code using an event loop.
* Tasks are placed in the call stack, and async tasks (like setTimeout) go to the task queue.
* The event loop checks if the call stack is clear and then moves queued tasks to the stack.

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
console.log("End");
// Output:
Start
End
Timeout
/*-------------------------------------------------------------------------*/

⚙️ 3. What is a higher-order function?
-> A function that takes another function as an argument or returns a function.

function higherOrder(fn) {
  return function(x) {
    return fn(x) * 2;
  }
}
function square(n) {
  return n * n;
}
const doubleSquare = higherOrder(square);
console.log(doubleSquare(3)); // 18
/*-------------------------------------------------------------------------*/

🔄 4. What are map(), filter(), and reduce() in arrays?
-> These are powerful array methods:

const numbers = [1, 2, 3, 4, 5];
// map: transforms each element
const squares = numbers.map(n => n * n); // [1, 4, 9, 16, 25]
// filter: selects elements based on a condition
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
// reduce: accumulates values into one
const sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
/*-------------------------------------------------------------------------*/

🔐 5. What is destructuring in JavaScript?
-> Destructuring lets you unpack values from arrays or objects easily.
// Array destructuring
const [a, b] = [10, 20];
console.log(a, b); // 10 20

// Object destructuring
const person = { name: "Bob", age: 30 };
const { name, age } = person;
console.log(name, age); // Bob 30
/*-------------------------------------------------------------------------*/

🔁 6. What is optional chaining (?.) and nullish coalescing (??)?
-> These are ES2020 features.

const user = { name: "Tom", address: null };
// Optional chaining
console.log(user.address?.city); // undefined (no error)
// Nullish coalescing
console.log(user.address ?? "No address"); // "No address"
/*-------------------------------------------------------------------------*/

⚠️ 7. What are template literals?
-> Template literals use backticks "(`)" and allow interpolation:

const name = "Jane";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Hello, Jane!
/*-------------------------------------------------------------------------*/

🧪 8. What is typeof operator?
-> Used to check the data type of a variable.

console.log(typeof 42);        // "number"
console.log(typeof "hello");  // "string"
console.log(typeof null);     // "object" (quirk in JS)
console.log(typeof undefined); // "undefined"
/*-------------------------------------------------------------------------*/

🧱 9. What is the difference between deep copy and shallow copy?
-> * Shallow copy: Only top-level elements are copied.
   * Deep copy: Entire object and nested elements are copied.

const obj1 = { a: 1, b: { c: 2 } };
const shallow = { ...obj1 };
shallow.b.c = 99;
console.log(obj1.b.c); // 99 (shared)

const deep = JSON.parse(JSON.stringify(obj1));
deep.b.c = 123;
console.log(obj1.b.c); // 99 (not affected)
/*-------------------------------------------------------------------------*/

🔍 10. What are truthy and falsy values in JavaScript?
-> * Falsy values: false, 0, "", null, undefined, NaN
   * Everything else is truthy.

if ("") console.log("This won't run");
if ("hello") console.log("This will run");
/*-------------------------------------------------------------------------*/
```