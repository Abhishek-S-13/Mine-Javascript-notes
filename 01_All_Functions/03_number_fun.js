// 1. Number(): Converts a value to a number.
let num = Number("123");
console.log("1. Number() : ",num);     // 123

// 2. parseInt(): Parses a string and returns an integer.
let num2 = parseInt("85.7");
console.log("2. parseInt() : ",num2);  // 85

// 3. parseFloat(): Parses a string and returns a floating point number.
let num3 = parseFloat("85.74324");
console.log("3. parseFloat() : ",num3);    // 85.7

// 4. isNaN(): Checks if a value is NaN (Not a Number).
console.log(isNaN("Hello")); // true
console.log(isNaN(123));     // false

// 5. isFinite(): Checks if a number is finite.
console.log(isFinite(100));       // true
console.log(isFinite(Infinity));  // false

// 6. toFixed(n): Formats a number with n digits after the decimal point.
let num6 = 3.14159;
console.log("6. toFixed(n) : ",num6.toFixed(2));   //  3.14

// 7. toString(): Converts a number to a string.
let num7 = 123;
console.log("7. toString() : ",num7.toString());  // 123