## Ticky Questions
```Javascript
11. What will this log?
console.log(typeof null);
// // Answer:
"object"

Explanation:
This is a long-standing bug in JavaScript. typeof null returns "object" due to how values are stored in memory.
/*---------------------------------------------------------------------------------*/

12. What’s the result?
console.log(false == '0');
// Answer:
true

Explanation:
Loose equality (==) causes type coercion:
* '0' becomes number 0 
* false becomes number 0
* So: 0 == 0 → true
/*---------------------------------------------------------------------------------*/

13. Can you guess this one?
let obj = { a: 1 };
let obj2 = { a: 1 };

console.log(obj == obj2);
// Answer:
false

Explanation:
Objects are compared by reference, not by content. Even though they look the same, they are different objects in memory.
/*---------------------------------------------------------------------------------*/

14. What will this return?
console.log(typeof function() {});
// Answer:
"function"

Explanation:
Functions have their own typeof value: "function", distinct from objects.
/*---------------------------------------------------------------------------------*/

15. What’s the value of this here?
let user = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  }
};

user.greet();
// Answer:
undefined

Explanation:
Arrow functions don’t have their own this; they inherit it from the parent scope (in this case, the global scope).
/*---------------------------------------------------------------------------------*/

16. What does this return?
console.log(!!"false" == !!"true");
// Answer:
true

Explanation:
Both "false" and "true" are non-empty strings, which are truthy.
So: !!"false" → true, !!"true" → true → true == true → true
/*---------------------------------------------------------------------------------*/

17. What does this output?
console.log("5" - 3);
// Answer:
2

Explanation:
- operator coerces "5" to a number before subtraction.
/*---------------------------------------------------------------------------------*/

18. What happens here?
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr);
// Answer:
[]

Explanation:
Setting arr.length = 0 clears the array in-place.
/*---------------------------------------------------------------------------------*/

19. What does this print?
console.log(Math.max()); 
console.log(Math.min());
// Answer:
-Infinity
Infinity

Explanation:
Calling Math.max() with no arguments returns the lowest possible number (-Infinity).
Calling Math.min() returns the highest possible number (Infinity).
/*---------------------------------------------------------------------------------*/

20. How many times will this loop run?
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}
// Answer:
It prints 5 five times.

Explanation:
The loop runs to completion before any setTimeout executes. By then, i === 5.
To fix this:
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}
// prints 0, 1, 2, 3, 4
/*---------------------------------------------------------------------------------*/
```