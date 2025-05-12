## 🚀 Intermediate/Advanced Questions:
```Javascript
🔄 1. What is the difference between setTimeout() and requestAnimationFrame()?
-> setTimeout(fn, delay) executes after a given time (not precise).
   requestAnimationFrame(fn) is optimized for animations, syncing with the browser's 
   refresh rate (usually ~60 FPS).

function animate() {
  // animation logic
  requestAnimationFrame(animate);
}
animate();

Use requestAnimationFrame for smoother animations.
/*-------------------------------------------------------------------------*/

🧵 2. What is the call stack and how does it work?
-> The call stack is a data structure that tracks function calls.

function a() {
  b();
}
function b() {
  console.log("Hello");
}
a();

Call Stack: a() → b() → log → b() returns → a() returns
/*-------------------------------------------------------------------------*/

⚙️ 3. What are generators in JavaScript?
-> Generators are special functions that can pause and resume using yield.

function* gen() {
  yield 1;
  yield 2;
  return 3;
}
const g = gen();
console.log(g.next()); // {value: 1, done: false}
console.log(g.next()); // {value: 2, done: false}
console.log(g.next()); // {value: 3, done: true}
/*-------------------------------------------------------------------------*/

🧱 4. What are Symbols in JavaScript?
-> Symbol is a primitive data type that creates unique identifiers, often used as object keys.

const sym = Symbol("id");
const obj = { [sym]: 123 };
console.log(obj[sym]); // 123
/*-------------------------------------------------------------------------*/

🌍 5. What is the global object in JavaScript?
-> In browsers: window
   In Node.js: global

console.log(window === this); // true (in browser)
/*-------------------------------------------------------------------------*/

🪝 6. What are WeakMap and WeakSet?
-> WeakMap allows keys as objects only, and those keys are weakly referenced.
   WeakSet stores objects only and allows garbage collection.

let obj = {};
let map = new WeakMap();
map.set(obj, "value");

obj = null; // now eligible for GC
/*-------------------------------------------------------------------------*/

🧠 7. What is memory leak in JavaScript?
-> A memory leak happens when memory is no longer needed but not released due to:
   Unused references
   Global variables
   Closures holding unnecessary data

let cache = {};
function leak() {
  let hugeData = new Array(1000000).fill("x");
  cache["leak"] = hugeData; // memory never released
}
/*-------------------------------------------------------------------------*/

⛓️ 8. What are async/await and how do they work?
-> async/await allows writing asynchronous code like synchronous.

async function fetchData() {
  try {
    const res = await fetch('https://api.com/data');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
/*-------------------------------------------------------------------------*/

🧱 9. What is prototypal inheritance in JavaScript?
-> Objects can inherit properties/methods from other objects via the prototype chain.

const animal = {
  speak() {
    console.log("Animal sound");
  }
};
const dog = Object.create(animal);
dog.speak(); // "Animal sound"
/*-------------------------------------------------------------------------*/

🧬 10. What is a pure function in JavaScript?
-> * Has no side effects
   * Returns the same output for the same input

function add(a, b) {
  return a + b;
}
Pure functions are predictable and easier to test.
/*-------------------------------------------------------------------------*/

🔗 11. What is event delegation?
-> Instead of attaching events to multiple child elements, you attach it to a parent and 
   handle events using event.target.

document.getElementById("parent").addEventListener("click", function(e) {
  if (e.target.matches("button")) {
    console.log("Button clicked:", e.target.textContent);
  }
});
/*-------------------------------------------------------------------------*/

🚧 12. What is the temporal dead zone (TDZ)?
-> The TDZ is the time between block start and variable declaration (let, const) 
   where accessing the variable throws an error.

console.log(x); // ReferenceError
let x = 5;
/*-------------------------------------------------------------------------*/

⚠️ 13. Why is typeof null === 'object'?
-> This is a known JavaScript bug from early versions and has been retained for compatibility.

console.log(typeof null); // "object"
/*-------------------------------------------------------------------------*/

🧠 14. How does JavaScript handle concurrency and async operations?
-> Through the event loop, call stack, task queue, and microtask queue (Promises, async/await).
/*-------------------------------------------------------------------------*/

🧰 15. How do you deep clone an object?
-> Using structuredClone() (modern), or fallback methods:

const obj = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(obj));
structuredClone(obj) is more reliable in modern environments.
/*-------------------------------------------------------------------------*/
```