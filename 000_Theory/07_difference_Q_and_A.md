## 🚀 Intermediate/Advanced Questions:
```Javascript
✅ 1. var vs let vs const
Feature	        var	            let	            const
Scope	        Function	    Block	        Block
Re-declaration	Allowed	        Not allowed	    Not allowed
Re-assignment	Allowed	        Allowed	        ❌ Not allowed
Hoisted     	Yes (undefined)	Yes (TDZ)	    Yes (TDZ)

function testScope() {
  if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
  }
  console.log(a); // 10
  console.log(b); // ReferenceError
  console.log(c); // ReferenceError
}
/********************************************************************************/

✅ 2. == vs ===
== checks for value equality with type coercion.
=== checks for strict equality (value + type).

console.log(5 == "5");   // true
console.log(5 === "5");  // false
/********************************************************************************/

✅ 3. null vs undefined
null: intentionally assigned to indicate “no value”.
undefined: a variable is declared but not assigned a value.

let a;
console.log(a);     // undefined

let b = null;
console.log(b);     // null
/********************************************************************************/

✅ 4. function vs arrow function =>
Feature	        Regular Function	Arrow Function
this	        Dynamic	            Lexical (inherits)
Constructor	    Yes	                No
arguments	    Available	        Not available

* Arrow functions inherit this from their lexical context.
* Regular functions define their own this based on the caller.
* Arrow functions don’t have their own arguments, super, or new.target.

function normal() { console.log(this); }
const arrow = () => console.log(this);
// Ex2
const obj = {
  name: "JS",
  regular: function() {
    return this.name;
  },
  arrow: () => {
    return this.name;
  }
};
console.log(obj.regular()); // "JS"
console.log(obj.arrow());   // undefined (global context)

/********************************************************************************/

✅ 5. undefined vs not defined
undefined: variable declared but not initialized
not defined: variable is not declared at all

let x;
console.log(x);  // undefined
console.log(y);  // ReferenceError: y is not defined
/********************************************************************************/

✅ 6. for, for...in, for...of
* for: General-purpose, uses index.
* for...in: Loops over keys of an object.
* for...of: Loops over values of iterable objects.

let arr = ['a', 'b', 'c'];

for (let i = 0; i < arr.length; i++) console.log(arr[i]);   // a b c
for (let i in arr) console.log(i);                          // 0 1 2
for (let val of arr) console.log(val);                      // a b c

⚠️ Be cautious with arrays — for...in is not recommended for them because:
* It returns keys as strings.
* It iterates over inherited and custom properties too.
✅ Use for: Iterating over object keys.
/********************************************************************************/

✅ 7. call() vs apply() vs bind()
* call: Pass arguments separately.
* apply: Pass arguments as an array.
* bind: Returns a new function with bound this.

function greet(msg) {
  console.log(`${msg}, ${this.name}`);
}
const user = { name: "Alice" };

greet.call(user, "Hello");        // Hello, Alice
greet.apply(user, ["Hi"]);        // Hi, Alice
const bound = greet.bind(user);
bound("Hey");                     // Hey, Alice

/********************************************************************************/

✅ 8. setTimeout() vs setInterval()
* setTimeout: Runs once after a delay.
* setInterval: Runs repeatedly after every delay.

setTimeout(() => console.log("run once"), 1000);

let count = 0;
const interval = setInterval(() => {
  console.log("every second");
  if (++count === 3) clearInterval(interval);
}, 1000);

/********************************************************************************/

✅ 9. map() vs forEach()
* map() transforms the array and returns a new array.
* forEach() performs actions but returns undefined.

const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // [2, 4, 6]

numbers.forEach(n => console.log(n * 2)); // logs: 2, 4, 6 (no return)

/********************************************************************************/

✅ 10. slice() vs splice()
* slice(start, end): Non-destructive. Returns a portion of array.
* splice(start, deleteCount, ...items): Modifies original array.

let arr1 = [1, 2, 3, 4];
let result = arr1.slice(1, 3);  // [2, 3]
console.log(arr1);             // [1, 2, 3, 4]

let arr2 = [1, 2, 3, 4];
arr2.splice(1, 2);             // removes 2, 3
console.log(arr2);             // [1, 4]
/********************************************************************************/

✅ 11. == vs Object.is()
🔹 == (Loose Equality)
* Performs type coercion before comparison.
* Tries to convert operands to the same type, then compares.

0 == '0'           // true   → type coercion: '0' → 0
false == 0         // true   → false → 0
null == undefined  // true   → considered equal loosely

🔹 Object.is() (SameValue Algorithm)
* No type coercion — strict identity check.
* Like === but with more precise edge case handling.
* Specifically, it distinguishes between +0 and -0, and considers NaN equal to NaN.

Object.is(0, '0')           // false → no coercion
Object.is(false, 0)         // false
Object.is(null, undefined)  // false

Object.is(NaN, NaN)         // true  ✅ (unlike == or ===)
Object.is(+0, -0)           // false ❌ (unlike == or ===)

🔸 Comparison Summary
Comparison	            ==	                Object.is()
Type coercion	        ✅ Yes	          ❌ No
0 and '0'	            true	            false
false and 0	            true	            false
null and undefined	    true	            false
NaN and NaN	            false	            true
+0 and -0	            true	            false
/********************************************************************************/

✅ 12. Object.freeze() vs Object.seal()
freeze(): Prevents all changes (no add/remove/update).
seal(): Prevents add/remove, but allows modification.

let obj = { a: 1 };

Object.freeze(obj);
obj.a = 2;
console.log(obj.a); // 1

let obj2 = { a: 1 };
Object.seal(obj2);
obj2.a = 2;
console.log(obj2.a); // 2

/********************************************************************************/

✅ 13. async/await vs .then()
Both handle Promises, but async/await provides cleaner, synchronous-like syntax.

// With then()
fetch("/data")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

// With async/await
async function fetchData() {
  try {
    const res = await fetch("/data");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
/********************************************************************************/

✅ 14. throw vs return in try...catch
🔸 Example: throw in try  /*----------------- Example: throw in try ------------------ */
function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (e) {
    return "Error: " + e.message;
  }
}
console.log(divide(10, 2));  // Output: 5
console.log(divide(10, 0));  // Output: Error: Cannot divide by zero
Explanation:
1. throw triggers the catch block.
2. The division is not performed because execution stops on throw

🔸 Example: return in try /*----------------- Example: return in try ------------------ */
function safeDivide(a, b) {
  try {
    if (b === 0) {
      return "Division not allowed";
    }
    return a / b;
  } catch (e) {
    return "Unexpected error";
  }
}
console.log(safeDivide(10, 2)); // Output: 5
console.log(safeDivide(10, 0)); // Output: Division not allowed
Explanation:
1. return ends the function immediately.
2. catch block is never triggered because there’s no error.

🔸 Combined Example: throw vs return /*--------- Combined Example: throw vs return --------- */
function processUser(user) {
  try {
    if (!user) throw new Error("No user provided");
    return `Hello, ${user.name}`;
  } catch (e) {
    return `Caught error: ${e.message}`;
  }
}
console.log(processUser({ name: "Alice" })); // Hello, Alice
console.log(processUser(null));              // Caught error: No user provided
✅ Summary:
1. Use throw when you need to signal a failure or exceptional condition.
2. Use return when you want to exit a function cleanly with a value.

/********************************************************************************/

✅ 15. window.onload vs DOMContentLoaded
🔸 Example: window.onload /*--------- Example: window.onload --------- */

window.onload = function () {
  console.log("Window loaded — all resources including images are ready.");
  const img = document.querySelector("img");
  console.log("Image dimensions:", img.width, img.height); // Accurate dimensions
};
✅ Use when you need to interact with images, CSS, or third-party scripts that must be loaded.

🔸 Example: DOMContentLoaded  /*--------- Example: DOMContentLoaded --------- */

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  const div = document.getElementById("myDiv");
  div.textContent = "Hello!";
});
✅ Use when you want to manipulate DOM elements as soon as they are available (even before images load).

🔁 Summary
Use window.onload when:	                            Use DOMContentLoaded when:
You need image sizes, fonts, or iframe data	        You just need to modify or read DOM content quickly
You’re relying on full layout rendering	            You care about speed and quick DOM access
You have a single script and don’t need multiple    You want to register multiple event listeners safe
onload events	

🧠 Pro Tip:
For modern development, prefer DOMContentLoaded for better performance and responsiveness, unless you explicitly require all external assets to be fully loaded.
/********************************************************************************/

```