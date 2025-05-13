## 🚀 Intermediate/Advanced Questions:
```Javascript
⚙️ 1. What is hoisting in JavaScript?
-> Hoisting is JavaScript behavior of moving declarations to the top of their scope (only declarations, not initializations).

console.log(a); // undefined
var a = 5;
var is hoisted with undefined; let/const are hoisted but in the temporal dead zone.
/*-------------------------------------------------------------------------*/

🔐 2. What are private class fields in JavaScript?
-> You can define private fields using # inside classes.

class User {
  #secret = "hidden";
  getSecret() {
    return this.#secret;
  }
}
const u = new User();
console.log(u.getSecret()); // "hidden"
/*-------------------------------------------------------------------------*/

⚛️ 3. What is currying in JavaScript?
-> Currying converts a function with multiple arguments into a chain of functions with one argument each.

function add(a) {
  return function(b) {
    return a + b;
  };
}
console.log(add(2)(3)); // 5
/*-------------------------------------------------------------------------*/

📦 4. What is the module pattern in JavaScript?
-> A design pattern to create encapsulation and privacy using IIFEs or ES Modules.

const counterModule = (function () {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
})();
/*-------------------------------------------------------------------------*/

🧾 5. What is the difference between Object.assign() and spread operator {...}?
-> Both clone objects, but:
   * Object.assign() mutates the target
   * {...} is syntactic sugar, doesn't mutate original

const a = { x: 1 };
const b = Object.assign({}, a);  // Safe
const c = { ...a };              // Also safe
/*-------------------------------------------------------------------------*/

📚 6. What is destructuring with default values?
-> Allows assigning default values if the value is undefined.

const { x = 10, y = 20 } = { x: 5 };
console.log(x, y); // 5, 20
/*-------------------------------------------------------------------------*/

🧩 7. What are tagged template literals?
-> They allow custom processing of template strings.

function tag(strings, ...values) {
  return strings[0] + values.join("-");
}
const result = tag`Hello ${"JS"} and ${"World"}`;
console.log(result); // Hello JS-World
/*-------------------------------------------------------------------------*/

⏳ 8. What are microtasks and macrotasks?
-> Microtasks: Promises, queueMicrotask, MutationObserver
   Macrotasks: setTimeout, setInterval, I/O

Promise.resolve().then(() => console.log("microtask"));
setTimeout(() => console.log("macrotask"));
console.log("main thread");
// Output: main thread → microtask → macrotask
/*-------------------------------------------------------------------------*/

📦 9. Difference between CommonJS and ES Modules?
Feature	        CommonJS	    ES Modules
Syntax	        require()	    import/export
Loading	        Synchronous	    Asynchronous (static)
Used In	        Node.js	        Browser & modern Node
/*-------------------------------------------------------------------------*/

🧠 10. What is the difference between deep freeze and shallow freeze?
-> Object.freeze() is shallow: only freezes top-level properties.

function deepFreeze(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
}
/*-------------------------------------------------------------------------*/

🧾 11. What is function composition?
-> Combining two or more functions to produce a new function.

const compose = (f, g) => x => f(g(x));
const double = x => x * 2;
const square = x => x * x;

const doubleThenSquare = compose(square, double);
console.log(doubleThenSquare(3)); // 36
/*-------------------------------------------------------------------------*/

🌐 12. What is the difference between DOM and BOM?
-> DOM: Document Object Model (HTML elements)
   BOM: Browser Object Model (browser features like window, location, history)
/*-------------------------------------------------------------------------*/

🔄 13. What are polyfills in JavaScript?
-> Polyfills are fallback implementations for features not supported in older browsers.

if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}
/*-------------------------------------------------------------------------*/

⚖️ 14. What is type coercion in JavaScript?
-> JavaScript automatically converts types when needed.

console.log('5' + 1);   // '51' (string)
console.log('5' - 1);   // 4   (number)
/*-------------------------------------------------------------------------*/

🧮 15. What is the difference between .some(), .every(), and .find()?
-> .some() → at least one true?
   .every() → all true?
   .find() → return the first match

const arr = [1, 2, 3, 4];

arr.some(x => x > 3);    // true
arr.every(x => x > 0);   // true
arr.find(x => x > 2);    // 3
/*-------------------------------------------------------------------------*/
```