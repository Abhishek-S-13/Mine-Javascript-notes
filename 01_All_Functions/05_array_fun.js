// 1. push(): Adds one or more elements to the end of an array.
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log("1. push() : ",fruits);    // [ 'apple', 'banana', 'orange' ]

// 2. pop(): Removes the last element from an array.
let fruits1 = ["apple", "banana", "orange"];
fruits1.pop();
console.log("2. pop() : ",fruits1);    //   [ 'apple', 'banana' ]

// 3. shift(): Removes the first element from an array.
let fruits3 = ["apple", "banana"];
fruits3.shift();
console.log("3. shift() : ",fruits3);  // [ 'banana' ]

// 4. unshift(): Adds one or more elements to the beginning of an array.
let fruits4 = ["banana"];
fruits4.unshift("apple");
console.log("4. unshift() : ",fruits4); //   [ 'apple', 'banana' ]

// 5. concat(): Merges two or more arrays into one.
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log("5. concat() : ",result);   //  [ 1, 2, 3, 4 ]

// 6. join(): Joins all elements into a string, separated by a specified separator.
let fruits6 = ["apple", "banana", "orange"];
console.log("6. join() : ",fruits.join(", "));     // apple, banana, orange

// 7. slice(start, end): Returns a shallow copy of a portion of an array.
let numbers7 = [1, 2, 3, 4, 5];
console.log("7. slice(start, end) : ",numbers7.slice(1, 4));   // [ 2, 3, 4 ]

// 8. splice(start, deleteCount, ...items): Adds/removes elements at a specific index.
let numbers8 = [1, 2, 3, 4];
numbers8.splice(2, 1, 99); // Removes 1 item at index 2 and adds 99
console.log("8. splice(start, deleteCount, ...items) : ",numbers8);    //  [ 1, 2, 99, 4 ]

// 9. indexOf(): Returns the first index of a specified element.
let colors9 = ["red", "blue", "green"];
console.log("9. indexOf() : ",colors9.indexOf("blue")); // 1

// 10. includes(): Checks if an array contains a specified value.
let colors10 = ["red", "blue", "green"];
console.log("10. includes() : ",colors10.includes("green")); // true

// 11. forEach(): Executes a function once for each array element.
let nums11 = [1, 2, 3, 5];
nums11.forEach(num11 => console.log("11. forEach() : ",num11 * 2)); // 2, 4, 6, 10

// 12. map(): Creates a new array with the results of calling a function on every element.
let nums12 = [1, 2, 3];
let doubled = nums12.map(num12 => num12 * 2);
console.log("12. map() : ",doubled);    //   [ 2, 4, 6 ]

// 13. filter(): Creates a new array with elements that pass a test.
let nums13 = [1, 2, 3, 4];
let even = nums13.filter(num13 => num13 % 2 === 0);
console.log("13. filter() : ",even);    //   [ 2, 4 ]

// 14. reduce(): Reduces the array to a single value.
let nums14 = [1, 2, 3, 4];
let sum = nums14.reduce((acc, curr) => acc + curr, 0);
console.log("14. reduce() : ",sum);     // 10

// 15. sort(): Sorts the elements of an array.
let nums15 = [3, 1, 4, 2];
nums15.sort(); // Default is lexicographic (not numerical)
console.log("15. sort() : ",nums15);    // [ 1, 2, 3, 4 ]