## 🚀 Intermediate/Advanced Questions:
```Javascript
🔁 1. What is event bubbling and capturing?
-> * Event bubbling: When an event happens (like a click), it first triggers on the innermost
   element and then bubbles up to the outer elements.
   * Event capturing (or trickling): The event starts from the outermost element and goes down to the target element.

By default, JavaScript uses bubbling, but you can use capturing with { capture: true } in addEventListener.
/*-------------------------------------------------------------------------*/

🔒 2. What is a closure?
-> A closure is a function that remembers the variables from its outer (enclosing) function, even after the outer function has finished executing.

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const counter = outer();
counter(); // 1
counter(); // 2
inner keeps access to count, forming a closure.
/*-------------------------------------------------------------------------*/

⚡ 3. What is an IIFE (Immediately Invoked Function Expression)?
-> An IIFE is a function that is executed immediately after it is defined.

(function() {
  console.log("I run immediately!");
})();

Useful for avoiding global variables or creating isolated scopes.
/*-------------------------------------------------------------------------*/

🔄 4. What is the difference between synchronous and asynchronous code?
-> * Synchronous: Executes line by line. Each operation waits for the previous one.
   * Asynchronous: Does not wait for tasks to complete (e.g., API calls, timers); 
     moves on to the next line.
// Asynchronous example
setTimeout(() => {
  console.log("Async code");
}, 1000);
console.log("Synchronous code");
// Output:
Synchronous code
Async code
/*-------------------------------------------------------------------------*/

💎 5. What is a Promise in JavaScript?
-> A Promise is an object that represents the future result of an asynchronous operation.

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 1000);
});

promise.then(result => console.log(result));

States: Pending → Fulfilled or Rejected
/*-------------------------------------------------------------------------*/

🧠 6. What is this in JavaScript ? 
-> * this refers to the context in which a function is called.
   * In a method, this is the object.
   * In the global scope, this refers to the global object (window in browsers).
   * In arrow functions, this is lexically inherited from the parent scope.

const obj = {
  name: "JS",
  getName: function() {
    return this.name;
  }
};
/*-------------------------------------------------------------------------*/

➡️ 7. Arrow functions vs Regular functions:
-> Feature	                Regular Function	            Arrow Function
   this binding	            Dynamic (depends on caller)	    Lexical (from surrounding scope)
   arguments object	        Available	                    Not available
   Usage as constructor	    Can be used	                    Cannot be used
/*-------------------------------------------------------------------------*/

🔁 8. What are callback functions?
-> A callback is a function passed as an argument to another function and called later.

function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

greet("Alice", () => {
  console.log("Callback executed");
});
/*-------------------------------------------------------------------------*/

⏱️ 9. What is the use of setTimeout() and setInterval()?
-> * setTimeout(fn, delay): Runs the function once after the delay.
   * setInterval(fn, delay): Runs the function repeatedly every delay.

setTimeout(() => console.log("One time"), 1000);
setInterval(() => console.log("Repeats"), 2000);
/*-------------------------------------------------------------------------*/

❓ 10. Difference between null and undefined?
-> * undefined: A variable declared but not assigned
   * null : 	Assigned intentionally to indicate "no value"

let x;
console.log(x); // undefined

let y = null;
console.log(y); // null
/*-------------------------------------------------------------------------*/