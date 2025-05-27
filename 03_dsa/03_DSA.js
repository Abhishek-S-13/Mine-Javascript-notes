// 1. Finding the larget number,  2. Reverse a number, 3. Calculate GCD

// 1. Finding the larget number of the element
let numbers1 = [10, 5, 8, 1, 22, 13];
let max = Math.max(...numbers1);
console.log(max); // Output: 22

// 1.1 Without spread (using loop):
let numbers2 = [10, 5, 8, 1, 22, 13];
let max2 = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
    if (numbers2[i] > max2) {
        max2 = numbers2[i];
    }
}
console.log(max2); // Output: 22

// 2. Reverse a number 
function reverseNumber(num) {
    let reversed = parseInt(num.toString().split('').reverse().join(''));
    return reversed;
}
console.log(reverseNumber(12345)); // Output: 54321
  
// 2.1 Handle negative numbers too:
function reverseNumber2(num) {
    let isNegative = num < 0;
    let reversed = parseInt(Math.abs(num).toString().split('').reverse().join(''));
    return isNegative ? -reversed : reversed;
}
console.log(reverseNumber2(-987)); // Output: -789
console.log(reverseNumber2(987)); // Output: 789

// 3. Calculate GCD of 2 numbers - GCD (Greatest Common Divisor)
// the greatest common factor number that divides them, exactly
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
console.log(gcd(48, 18)); // Output: 6
console.log(gcd(12, 8)); // Output: 4

/*
gcd(48, 18) -> b !== 0 → Call gcd(18, 48 % 18) → gcd(18, 12)
gcd(18, 12) -> b !== 0 → Call gcd(12, 18 % 12) → gcd(12, 6)
gcd(12, 6) -> b !== 0 → Call gcd(6, 12 % 6) → gcd(6, 0)
gcd(6, 0) -> b === 0 → Return 6
*/

// 4. Check for Anagram 
function isAnagram(str1, str2) {
    let word1 = str1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    let word2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    return (word1 === word2) ? "Yes it is" : "No it is not";
}
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world"));   // false
console.log(isAnagram("how", "how"));

// 4.1 Check for Anagram in simple way using => 
function isAnagram2(str1, str2) {
    let normalize = str => str.toLowerCase().replace(/\s/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}  
console.log(isAnagram2("listen", "silent")); // true
console.log(isAnagram2("hello", "world"));   // false
console.log(isAnagram2("how", "how"));  // true