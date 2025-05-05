## 🔢 1. Number(): Converts a value to a number.
``` Javascript
let num = Number("123");
console.log(num);     // 123
```

## 🔢 2. parseInt(): Parses a string and returns an integer.
``` Javascript
let num2 = parseInt("85.7");
console.log(num2);  // 85
```

## 🔢 3. parseFloat(): Parses a string and returns a floating point number.
``` Javascript
let num3 = parseFloat("85.7");
console.log(num3);    // 85.7
```

## 🔢 4. isNaN(): Checks if a value is NaN (Not a Number).
``` Javascript
console.log(isNaN("Hello")); // true
console.log(isNaN(123));     // false
```

## 🔢 5. isFinite(): Checks if a number is finite.
``` Javascript
console.log(isFinite(100));       // true
console.log(isFinite(Infinity));  // false
```

## 🔢 6. toFixed(n): Formats a number with n digits after the decimal point.
``` Javascript
let num6 = 3.14159;
console.log(num6.toFixed(2));   //  3.14
```

## 🔢 7. toString(): Converts a number to a string.
``` Javascript
let num7 = 123;
console.log(num7.toString());  // 123
```