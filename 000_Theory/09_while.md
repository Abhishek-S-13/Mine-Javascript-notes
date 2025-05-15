## While condition

1. print 1 to 10
``` Javascript 
let i = 1;
while(i <= 10){
    console.log(i);
    i++;
}
/*-------------------------------------------------------------------------*/

2: Find the sum of all even numbers between 1 and 20 using a while loop.

let i = 1;
let sum = 0;
while (i <= 20) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}
console.log(sum);  // Output: 110
/*-------------------------------------------------------------------------*/

3: Write a while loop that finds the factorial of a given number.

let n = 5;  // Change this value to test with other numbers
let factorial = 1;
let i = 1;
while (i <= n) {
    factorial *= i;
    i++;
}
console.log(factorial);  // Output: 120
/*-------------------------------------------------------------------------*/

4: Reverse a number using a while loop.

let number = 12345;
let reversed = 0;
while (number > 0) {
    let lastDigit = number % 10;  // Get the last digit
    reversed = reversed * 10 + lastDigit;  // Add it to the reversed number
    number = Math.floor(number / 10);  // Remove the last digit from the number
}
console.log(reversed);  // Output: 54321
/*-------------------------------------------------------------------------*/

5: Count how many times the number 3 appears in an array using a while loop.

let arr = [1, 2, 3, 4, 3, 5, 3];
let count = 0;
let i = 0;
while (i < arr.length) {
    if (arr[i] === 3) {
        count++;
    }
    i++;
}
console.log(count);  // Output: 3
/*-------------------------------------------------------------------------*/

6: Print the Fibonacci sequence up to the 10th term using a while loop.

let n = 10;
let a = 0;
let b = 1;
let count = 0;
while (count < n) {
    console.log(a);
    let nextTerm = a + b;
    a = b;
    b = nextTerm;
    count++;
}
/*-------------------------------------------------------------------------*/

7: Check if a number is prime using a while loop.

let number = 17;
let i = 2;
let isPrime = true;
while (i <= Math.sqrt(number)) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
console.log(isPrime);  // Output: true
```