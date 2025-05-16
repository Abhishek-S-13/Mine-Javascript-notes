## Ticky Questions
```Javascript
1. What will the output be? 
console.log([] + []);
// Answer: 
"" (an empty string)

Explanation:
When two arrays are added with +, JavaScript converts them to strings:
[].toString() => ""
/*---------------------------------------------------------------------------------*/

2. What will this print?
console.log([] + {});  
console.log({} + []);
// Answer:
"[object Object]"
0

Explanation:
[] + {} → "" + "[object Object]" → "[object Object]"
{} alone is interpreted as a block, so {} + [] becomes +[] → 0
/*---------------------------------------------------------------------------------*/

3. What’s the output?
console.log(typeof NaN);
// Answer:
"number"

Explanation:
NaN stands for "Not a Number", but its type is still "number".
/*---------------------------------------------------------------------------------*/

4. What does this log?
let a = [1, 2, 3];
a[10] = 99;
console.log(a.length);
// Answer:
11

Explanation:
JavaScript arrays are sparse. Setting index 10 means the length becomes 11.
/*---------------------------------------------------------------------------------*/

5. What happens here? console.log(0.1 + 0.2 === 0.3);
// Answer:
false

Explanation:
Floating point precision issue:

0.1 + 0.2 = 0.30000000000000004
/*---------------------------------------------------------------------------------*/

6. What will be the value of x?
let x = (function() {
  return typeof arguments;
})();
// Answer:
"object"

Explanation:
arguments is an object, even though it looks array-like.
/*---------------------------------------------------------------------------------*/

7. What’s the result?
let x = [1, 2, 3];
x[10] = 5;
console.log(x[6]);
// Answer:
undefined

Explanation:
Index 6 is empty; JavaScript arrays can have "holes".
/*---------------------------------------------------------------------------------*/

8. What will this print?
let a = "5";
let b = 5;
console.log(a + b);
// Answer:
"55"

Explanation:
a is a string. + operator performs string concatenation when one operand is a string.
/*---------------------------------------------------------------------------------*/

9. What's the output?
(function(){
  var a = b = 5;
})();
console.log(typeof b);
// Answer:
"number"

Explanation:
b becomes a global variable because it's implicitly assigned:
var a = b = 5; // equivalent to b = 5; var a = b;
/*---------------------------------------------------------------------------------*/

10. What does this return?
console.log([..."hello"]);
// Answer:
["h", "e", "l", "l", "o"]

Explanation:
The spread operator spreads a string into individual characters.
/*---------------------------------------------------------------------------------*/
```