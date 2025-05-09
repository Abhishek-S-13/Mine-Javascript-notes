## 🔹 Creation & Checking
``` Javascript
Array.isArray() : Checks if a value is an array	
-> Array.isArray([1, 2]); // true
Array.from() : Creates an array from iterable or array-like objects 
-> Array.from('abc'); // ['a', 'b', 'c']
Array.of()	: Creates an array from arguments	
-> Array.of(1, 2, 3); // [1, 2, 3]

console.log(Array.isArray([1, 2, 3]));        // true
console.log(Array.from('hello'));             // ['h', 'e', 'l', 'l', 'o']
console.log(Array.of(1, 2, 3));               // [1, 2, 3]
```

## 🔹 Adding/Removing Elements
``` Javascript
push()	: Adds to end	        -> arr.push(4);
pop()	: Removes from end	    -> arr.pop();
unshift() : Adds to start	    -> arr.unshift(0);
shift()	: Removes from start	-> arr.shift();
splice() : Adds/removes at index-> arr.splice(2, 1, 'a'); // remove 1 at index 2, insert 'a'
slice()	: Returns shallow copy	-> arr.slice(1, 3);

let arr = [1, 2, 3];

arr.push(4);            // Adds to end
console.log(arr);       // [1, 2, 3, 4]

arr.pop();              // Removes from end
console.log(arr);       // [1, 2, 3]

arr.unshift(0);         // Adds to start
console.log(arr);       // [0, 1, 2, 3]

arr.shift();            // Removes from start
console.log(arr);       // [1, 2, 3]

arr.splice(1, 1, 'a');  // Replace 1 element at index 1 with 'a'
console.log(arr);       // [1, 'a', 3]

let sliced = arr.slice(0, 2); // Extracts from index 0 to 2 (not inclusive)
console.log(sliced);    // [1, 'a']
```

## 🔹 Searching/Indexing
```Javascript
indexOf() :	First index of value	    -> arr.indexOf(2);
lastIndexOf() :	Last index of value	    -> arr.lastIndexOf(2);
includes() : Checks if value exists	    -> arr.includes(3);
find() : Finds first matching element   -> arr.find(x => x > 2);
findIndex() : Finds index of first match->	arr.findIndex(x => x > 2);

let nums = [1, 2, 3, 4, 2];

console.log(nums.indexOf(2));      // 1
console.log(nums.lastIndexOf(2));  // 4
console.log(nums.includes(3));     // true

console.log(nums.find(x => x > 2));         // 3
console.log(nums.findIndex(x => x > 2));    // 2
```

## 🔹 Iterating/Transforming
```Javascript
forEach() : Runs function on each element	-> arr.forEach(x => console.log(x));
map() : Returns new array from function	    -> arr.map(x => x * 2);
filter() : Returns filtered array	        -> arr.filter(x => x > 2);
reduce() : Accumulates into single value    -> arr.reduce((a, b) => a + b);
reduceRight() : Same but right-to-left	    -> arr.reduceRight((a, b) => a + b);

let arr = [1, 2, 3];

arr.forEach(x => console.log(x));  // 1 2 3

let doubled = arr.map(x => x * 2);
console.log(doubled);              // [2, 4, 6]

let filtered = arr.filter(x => x > 1);
console.log(filtered);             // [2, 3]

let sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);                  // 6

let rightSum = arr.reduceRight((a, b) => a + b, 0);
console.log(rightSum);            // 6
```

## 🔹 Sorting & Reordering
```Javascript
sort() : Sorts array in-place	    -> arr.sort();
reverse() : Reverses array in-place -> arr.reverse();
flat() : Flattens nested arrays     -> [1, [2, [3]]].flat(2); // [1, 2, 3]
flatMap() : map + flat (depth 1)    -> arr.flatMap(x => [x, x * 2]);

let items = [3, 1, 4, 2];

items.sort();                      // Sort as strings by default
console.log(items);                // [1, 2, 3, 4]

items.reverse();
console.log(items);               // [4, 3, 2, 1]

let nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2));       // [1, 2, 3, [4]]

let flatMapped = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(flatMapped);          // [1, 2, 2, 4, 3, 6]

```

## 🔹 Combining/Joining
```Javascript
concat() : Merges arrays	          -> arr.concat([4, 5]);
join()	: Joins elements to string	  -> arr.join(','); // "1,2,3"
toString() : Converts array to string -> arr.toString(); // "1,2,3"

let a = [1, 2];
let b = [3, 4];

let combined = a.concat(b);
console.log(combined);           // [1, 2, 3, 4]

console.log(a.join('-'));        // "1-2"
console.log(a.toString());       // "1,2"
```

## 🔹 Filling/Copying
```Javascript
fill() : Fills array with value	               -> [1,2,3].fill(0); // [0,0,0]
copyWithin() : Copies part to another location -> [1,2,3,4].copyWithin(1, 2); // [1,3,4,4]

let arr = [1, 2, 3, 4];

arr.fill(0, 1, 3);                // Fill with 0 from index 1 to 3
console.log(arr);                // [1, 0, 0, 4]

let copy = [1, 2, 3, 4];
copy.copyWithin(1, 2);           // Copy from index 2 to index 1
console.log(copy);               // [1, 3, 4, 4]

```

## 🔹 Other Useful Properties/Methods
```Javascript
length	: Number of elements            -> arr.length;
[Symbol.iterator]()	: Default iterator  -> for (let x of arr) {...}
entries() : Iterator of key/value pairs	-> for (let [i, val] of arr.entries()) {...}
keys() : Iterator of keys (indexes)	    -> arr.keys();
values() : Iterator of values	        -> arr.values();

let arr = ['a', 'b', 'c'];

for (let val of arr.values()) {
  console.log(val);              // a b c
}

for (let key of arr.keys()) {
  console.log(key);              // 0 1 2
}

for (let [i, val] of arr.entries()) {
  console.log(i, val);           // 0 'a' ... etc.
}
```