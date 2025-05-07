## 1. Output for this JS
```Javascript
console.log(1 + 2 + "3");   // 33
console.log("1" + 2 + 3);   // 123 

Explaination
If we addition str + num -> this num is converted into str and everytime start from left to right
33 -> 1 + 2 ="3" +"3" -> 33 : here 1 and 2 num add then next str so it will str 33
123 -> "1" + 2 = "12"+3 -> 123 
```

## 2. Output for this JS
```Javascript
{
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a,b,c); // ReferenceError: b is not defined

Explaination
var a = 1; is function-scoped (or globally scoped if not inside a function),
so a is accessible outside the block.
let b = 2; and const c = 3; are block-scoped, so they are not accessible outside the {} block.

Therefore
console.log(a) works (prints 1)
console.log(b) and console.log(c) throw ReferenceError 
```

## 3 Output for this JS
```Javascript
console.log(5 && 0 || 7)    // 7 

Explaination
&& returns the first falsy value or the last value if all are truthy.
|| returns the first truthy value.
```

## 4 Output for this JS
```Javascript
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

Explaination
In JavaScript, all arrays are also objects.
Array is a subclass of Object, 
meaning: Array.prototype is derived from Object.prototype.
         Therefore, arr inherits from both Array and Object.

arr --> Array.prototype --> Object.prototype --> null
```
## 5. Output for this JS
```Javascript
if([]){
    console.log("true");  
}

Explaination 
array are considerd object in JS and [] is also truty value is it will print true
```

## 6. Output for this JS
```Javascript
console.log("2" > "10");  // true
console.log("2" > 10);    // false
console.log("12" > 10);   // true

Explaination
string-to-string comparison JS compares strings Lexicographicall comparision 
means it will compare 2 string char by char by using Unicode value
"2" > "10" - true str + str
"2" > 10  - false str + num so here str 2 will converted into num 2 > 10 -> false
"12" > 10  - false str + num so here str 12 will converted into num 12 > 10 -> true
```

## 7. Output for this JS
```Javascript
console.log(0.1 + 0.2 === 0.3); // false 
console.log( 0.1 + 0.2 );       // 0.30000000000000004
console.log( 0.1 + 0.2 === 0.30000000000000004);    // true
```

## 8. Output for this JS

```Javascript
console.log("14" - 2 / "23" - 4);   // 9.91304347826087
console.log("14" - 2 * "23" - 4);    // -36
console.log("14" - 2 - "23" - 4);   // -15
console.log("14" - 2 + "23" - 4);   // 1219

🔍 Understanding Type Coercion in JavaScript Arithmetic
When using arithmetic operators (-, *, /, %) with mixed types (strings and numbers), JavaScript automatically converts strings to numbers, except with +, which may perform string concatenation.

✅ Safe Coercion Operators
"10" - 2        // 8     → "10" becomes 10
"5" * "4"       // 20    → both strings become numbers
"100" / 2       // 50    → "100" becomes 100

⚠️ Watch Out for + Operator
"10" + 2        // "102" → string concatenation
10 + "2"        // "102" → same
10 + 2          // 12    → both are numbers
```
