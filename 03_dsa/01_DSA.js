// 1.Reverse a String, 2.Palindrome or not, 3.Fibonacci numbers

//1. Reverse a String
const str = "Abhishek"
const reverse = str.split('').reverse().join('');
console.log(reverse);   // kehsihbA

// 2. Palindrome or not : Basic Example (case-sensitive, no punctuation handling):
function isPalindrom(str){
    const reverse = str.split('').reverse().join('');
    // return (str === reverse) // true || false it will show
    return (str === reverse) ? "Yes it is" : "No it isn't"
}
console.log(isPalindrom("madam")); // Yes it is
console.log(isPalindrom("hello")); // No it isn't

// 2.1 Improved Version (ignores case and non-alphanumeric characters):
function isPalindrom2(str){
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverse2 = cleaned.split('').reverse().join('');
    return cleaned === reverse2 ? "Yes it is " : "No it isn't";
}
console.log(isPalindrom2("A man, a plan, a canal, Panama")); // Yes it is
console.log(isPalindrom2("Was it a car or a cat I saw?"));   // Yes it is
console.log(isPalindrom2("Not a palindrome"));  //  No it isn't

// 3. Fibonacci numbers : Option 1: Generate first n Fibonacci numbers
function fibonacci(n){
    const s = [0, 1];
    for (let i = 2; i < n ; i++){
        s.push(s[i-1] + s[i-2]);
    }
    return s.slice(0, n);
}
console.log(fibonacci(10));
// OP : [  0, 1,  1,  2,  3,  5, 8, 13, 21, 34 ]

// 3.1 Recursive version (not efficient for large n)
function fibonacci2(n) {
    if (n < 2) return n;
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}
console.log(fibonacci2(7)); 
//OP:  13 (7th Fibonacci number)
