## 
```Javascript
// node -v
// npm install -g jsvu
// jsvu 01_test.js
const myArray= []
// %DebugPrint(myArray);

"contiguous" (packed) vs "holey"
1. Packed Arrays (Contiguous Arrays) 
    -> These arrays have no holes (i.e., no missing indexes) and are stored efficiently.

2. Holey Arrays 
    -> Arrays with missing (undefined) indexes — i.e., they have "holes."
   
PACKED_ELEMENTS	: Contiguous, no undefined or holes
HOLEY_ELEMENTS	: Some indexes are missing (holes)
DICTIONARY_ELEMENTS	: Very sparse or large indexes

PACKED_SMI_ELEMENTS — integers only | small elements 
PACKED_DOUBLE_ELEMENTS — floats
PACKED_ELEMENTS — any JS value (mixed types)

Ex:3 
const myArray2 = [1, 2, , 4, 5]
// PACKED_SMI_ELEMENTS

myArray2.push(6.0);
// PACKED_DOUBLE_ELEMENTS

myArray2.push('7');
// PACKED_ELEMENTS 

myArray2[10] = 11;
// HOLEY_ELEMENTS

console.log(myArray2);          // [ 1, 2, <1 empty item>, 4, 5, 6, '7', <3 empty items>, 11 ]
console.log(myArray2.length);   // 11
console.log(myArray2[9]);       // undefined
console.log(myArray2[19]);      // undefined (out of bound)

// bound check : from start array to check the lentgh if its not there it will show undefined

// if it hole in the array 
//  -> hasOwnProperty(myarray, 9) // undefined
//  -> hasOwnProperty(myarray.prototype, 10)
//  -> hasOwnProperty(object.prototype, 10)

Ex:3 
const myArray3 = [1, 2, , 4, 5]
console.log(myArray2[2]);
// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

Ex:4
const myArray4 = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS 
myArray4[0] = '1' // HOLEY_ELEMENTS
myArray4[1] = '2' // HOLEY_ELEMENTS
myArray4[2] = '3' // HOLEY_ELEMENTS

Ex:5
const myArray5 = []
myArray5.push('1')  // PACKED_ELEMENTS
myArray5.push('2')  // PACKED_ELEMENTS
myArray5.push('3')  // PACKED_ELEMENTS

Ex:6
const myArray6 = [1, 2, 3, 4, 5]
myArray6.push(NaN) // DOUBLE
myArray6.push(Infinity) // DOUBLE