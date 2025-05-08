// 1.factorial of a number, 2. Prime Number, 3. Remove duplicates

// 1.factorial of a number Using a Recursive Function
function factorial(n) {
    if (n < 0) return undefined; // factorial not defined for negative numbers
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

//  1.1 Using an Iterative Approach:
function factorial2(n) {
    if (n < 0) return "Factorial is undefined";
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}
console.log(factorial2(5)); // Output: 120
console.log(factorial2(-5)); // Output: Factorial is undefined

// 2. Prime Number Checker Function:
function isPrime(n) {
    if (n <= 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(n); i++) { // check for factors up to square root of n
      if (n % i == 0) return false;
    }
    return true;
}  
console.log(isPrime(7));  // Output: true
console.log(isPrime(10)); // Output: false

// 2.1 Prime Number Checker Function under 20
function isPrime2(n) {
    if (n <= 2) return false; 
    for (let i = 2; i <= Math.sqrt(n); i++) { 
      if (n % i == 0) return false;
    }
    return true;
}  
let primes = [];
for (let i = 2; i < 20; i++) {
    if (isPrime2(i)) {
        primes.push(i);
    }
} 
console.log(primes.join(' ')); // Output: 3 5 7 11 13 17 19 

// 3. Remove duplicates from the array : Example using Set:
let arr = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4, 5]

// 3.1 Alternative using filter:
let arr2 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr2 = arr2.filter((value, index) => arr2.indexOf(value) === index);
console.log(uniqueArr2); // Output: [1, 2, 3, 4, 5]

// 4. Sorting an arry
let numbers = [10, 5, 8, 1];
numbers.sort((a, b) => a - b); // ascending order
console.log(numbers); // Output: [1, 5, 8, 10]

numbers.sort((a, b) => b - a); // descending order
console.log(numbers); // Output: [10, 8, 5, 1]


