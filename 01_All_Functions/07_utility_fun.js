// 1. typeof – Check the type of a value
let x = 42;
console.log("1. typeof : ",typeof x); // number

// 2. Object.keys() – Get keys from an object
let person2 = { name: "Ironman", age: 30 };
console.log(Object.keys(person2)); // [ 'name', 'age' ]

// 3. Object.values() – Get values from an object
let person3 = { name: "Ironman", age: 30 };
console.log(Object.values(person3)); // [ 'Ironman', 30 ]

// 4. Object.entries() – Get key-value pairs from an object
let person4 = { name: "Ironman", age: 30 };
console.log(Object.entries(person4)); // [ [ 'name', 'Ironman' ], [ 'age', 30 ] ]

// 5. JSON.stringify() – Convert an object to a JSON string
let obj5 = { name: "Spiderman", age: 25 };
console.log(JSON.stringify(obj5)); // {"name":"Spiderman","age":25}

// 6. JSON.parse() – Convert a JSON string to an object
let jsonStr = '{"name":"Spiderman","age":25}';
let obj6 = JSON.parse(jsonStr);
console.log("8. JSON.parse() : ",obj6.name); // Spiderman

// 7. setTimeout() – Run code after a delay
setTimeout(() => {
  console.log("9. Hello after 2 seconds");      //  Hello after 2 seconds
}, 2000);                                       

// 8. setInterval() – Run code repeatedly at intervals
let count = 0;
let timer = setInterval(() => {
  console.log("10. setInterval Count: ", ++count);
  if (count >= 3) clearInterval(timer);
}, 1000);
/* OP
10. setInterval Count:  1
10. setInterval Count:  2
10. setInterval Count:  3
*/ 

// 9. navigator.userAgent – Get browser information
console.log(navigator.userAgent); // Output: browser details

// 12. alert() / confirm() / prompt() – Browser dialogs
// alert("Welcome!");
// let confirmed = confirm("Do you agree?");
// let name = prompt("What is your name?");