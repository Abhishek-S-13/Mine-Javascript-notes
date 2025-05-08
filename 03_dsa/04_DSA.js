// 1.Count the integer, 2.Second largest number, 3.Find Missing Number
// 4. Swap two number, 5. Sum of Digits

// 1. Count the integer : Basic Integer Digit Count:
function countDigits(num) {
    return Math.abs(num).toString().length;
}  
console.log(countDigits(12345));   // Output: 5
console.log(countDigits(-9876));   // Output: 4

// 1.1 Exclude Decimal Point (for floats):
function countDigits(num) {
    return num.toString().replace('.', '').replace('-', '').length;
}
console.log(countDigits(12345));    // Output: 5
console.log(countDigits(123.45));   // Output: 5
console.log(countDigits(-987.6));   // Output: 4

// 2. Second largest number
function secondLargest(arr) {
    let unique = [...new Set(arr)]; // Remove duplicates
    unique.sort((a, b) => b - a);   // Descending sort
    return unique[1];
}
console.log(secondLargest([10, 20, 5, 8, 70, 50])); // Output: 50

// 3. Decimal to Binary
function decimalToBinary(num) {
    return num.toString(2);
}
console.log(decimalToBinary(10)); // Output: "1010"
console.log(decimalToBinary(5));  // Output: "101"
  
// 4. Swap two number
function swap(a,b,c){
    return [a,b,c] =[c,b,a];
}
console.log(swap(2,3,4));   // 4, 3, 2

// 5. Sum of Digits
function sumOfDigits(num) {
    return Math.abs(num).toString().split('').reduce((a, b) => a + Number(b), 0);
}
console.log(sumOfDigits(1234));   // Output: 10 (1 + 2 + 3 + 4)
console.log(sumOfDigits(-567));   // Output: 18 (5 + 6 + 7)
  