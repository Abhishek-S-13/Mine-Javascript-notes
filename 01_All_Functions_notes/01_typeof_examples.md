## 🎯 1. Basic Examples:
``` Javascript
console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
```

## 🎯 2. Special Cases:
``` Javascript
console.log(typeof null);          // ⚠️ "object" (this is a known JavaScript quirk)
console.log(typeof NaN);           // "number" (NaN is still of type number)
```

## 🎯 3. Object Types:
``` Javascript
console.log(typeof {});            // "object"
console.log(typeof []);            // "object" (Arrays are objects in JavaScript)
console.log(typeof new Date());    // "object"
```

## 🎯 4. Function:
``` Javascript
console.log(typeof function(){});  // "function"
```

## 🎯 5. Symbol and BigInt:
``` Javascript
console.log(typeof Symbol("id"));  // "symbol"
console.log(typeof 123n);          // "bigint"
```

## 🎯 6. With Variables:
## 🎯 1. String Variable
``` Javascript
let name = "Alice";
console.log(name);  // Output: Alice
```

## 🎯 2. Number Variable
``` Javascript
let age = 30;
console.log(age);  // Output: 30
```

## 🎯 3. Boolean Variable
``` Javascript
let isLoggedIn = true;
console.log(isLoggedIn);  // Output: true
```

## 🎯 4. Null Variable
``` Javascript
let result = null;
console.log(result);  // Output: null
```

## 🎯 5. Undefined Variable
``` Javascript
let data;
console.log(data);  // Output: undefined
```

## 🎯 6. Array Variable
``` Javascript
let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: red
```

## 🎯 7. Object Variable
``` Javascript
let person = { name: "Bob", age: 25 };
console.log(person.name); // Output: Bob
```

## 🎯 8. Function Variable
``` Javascript
const greet = function() {
  console.log("Hello!");
};
greet(); // Output: Hello!
```

## 🎯 9. Constant Variable
``` Javascript
const PI = 3.14;
console.log(PI); // Output: 3.14
```

## 🎯 10. Using var (older style)
``` Javascript
var city = "New York";
console.log(city); // Output: New York
```

## 🎯 11. Symbol and BigInt
``` Javascript
let id = Symbol("userID");
let bigNumber = 9007199254740991n;
console.log(typeof id);        // Output: symbol
console.log(typeof bigNumber); // Output: bigint
```