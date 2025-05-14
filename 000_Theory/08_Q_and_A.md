## Intermediate/Advanced Questions:
```Javascript
✅ 1. JavaScript is Single-threaded (but asynchronous)
-> JavaScript uses an event loop to handle async operations.
   setTimeout, fetch, and Promises don’t block execution.

console.log("Start");
setTimeout(() => console.log("Async"), 0);
console.log("End");
// Output: Start → End → Async
/*-------------------------------------------------------------------------*/

✅ 2. Variable Declarations (var, let, const)
-> var: function-scoped, hoisted (can be accessed before declaration)
   let and const: block-scoped, not hoisted in the same way
   Prefer const by default, use let if reassigning.
/*-------------------------------------------------------------------------*/

✅ 3. Closures
-> Functions remember the scope in which they were created.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}
const counter = outer();
console.log(counter()); // 1
/*-------------------------------------------------------------------------*/

✅ 4. this Keyword Behavior
-> Depends on how the function is called, not where it’s defined.
   Arrow functions don’t bind their own this.

const obj = {
  name: "JS",
  greet() {
    return `Hello, ${this.name}`;
  }
};
obj.greet(); // "Hello, JS"
/*-------------------------------------------------------------------------*/

✅ 5. Prototypes & Inheritance
-> JavaScript uses prototype-based inheritance.

function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  return `Hi, I'm ${this.name}`;
};
const p = new Person("Alex");
p.sayHi(); // Hi, I'm Alex
/*-------------------------------------------------------------------------*/

✅ 6. Type Coercion and Equality
-> Use === instead of == to avoid unexpected type coercion.

0 == '0'        // true (bad)
0 === '0'       // false (good)
/*-------------------------------------------------------------------------*/

✅ 7. Higher-Order Functions & Callbacks
-> Functions can be passed as arguments, returned, or stored in variables.

const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]
/*-------------------------------------------------------------------------*/

✅ 8. Promises and async/await
-> For managing asynchronous logic in a cleaner way.

async function fetchData() {
  const res = await fetch('/api/data');
  const data = await res.json();
  return data;
}
/*-------------------------------------------------------------------------*/

✅ 9. Destructuring & Spread/Rest
-> Makes code cleaner and more readable.

const [first, ...rest] = [1, 2, 3]; // first = 1, rest = [2, 3]
const obj = { a: 1, b: 2 };
const { a } = obj; // a = 1
/*-------------------------------------------------------------------------*/

✅ 10. Modules (import / export)
-> Enables better code organization and reuse.

// utils.js
export function add(a, b) { return a + b; }

// main.js
import { add } from './utils.js';
/*-------------------------------------------------------------------------*/

✅ 11. DOM Manipulation & Events
-> Know how to query elements and handle events.

document.querySelector('#btn').addEventListener('click', () => {
  alert('Clicked!');
});
/*-------------------------------------------------------------------------*/

✅ 12. Memory Leaks & Performance
-> Watch out for long-lived closures, event listeners not removed, or large unused DOM trees.
/*-------------------------------------------------------------------------*/

✅ 13. null, undefined, and Optional Chaining
-> Understand the difference and use optional chaining to avoid errors.

const user = {};
console.log(user?.profile?.name); // undefined, no error
/*-------------------------------------------------------------------------*/

✅ 14. Functional vs. Imperative Programming
-> Prefer functional (pure functions, immutability) when possible.
/*-------------------------------------------------------------------------*/

✅ 15. Browser APIs (Fetch, LocalStorage, etc.)
-> Know built-in APIs: fetch, localStorage, history, navigator, etc.

localStorage.setItem('theme', 'dark');
/*-------------------------------------------------------------------------*/
```