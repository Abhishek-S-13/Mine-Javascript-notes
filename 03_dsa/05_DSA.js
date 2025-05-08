// 1.Simple calculator, 2.Check if string is empty, 3.Count the Occurrences, 4.Remove all whitespaces

// 1. Simple calculator
function calculator(a, b, operator) {
    if ((typeof a === "number") && (typeof b === "number")){
        switch(operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Cannot divide by zero';
        default:
            return 'Invalid operator';
        }
    }
    return "unknown value";
}  
console.log(calculator(10, 5, '+')); // Output: 15
console.log(calculator(10, 5, '-')); // Output: 5
console.log(calculator(10, 5, '*')); // Output: 50
console.log(calculator(10, 5, '/')); // Output: 2
  
// 2. Check if string is empty
function isEmpty(str) {
    return (str === '') ? "String is empty" : "String isn't empty";
}
console.log(isEmpty(''));      // true
console.log(isEmpty('hello')); // false

// 3. Count the Occurrences of a char in a string
function Occurrences1(str, char){
    return (str.match(char)).length;
}
console.log(Occurrences1("abhishek",/h/ig));    // 2 -> Matches: ['h', 'h']
console.log(Occurrences1("MalAyalam",/a/ig));   // 4 ->  // Matches: ['a', 'A', 'a', 'a']
// i → case-insensitive
// g → global (find all matches, not just the first)

// 4. Remove all whitespaces from sting
function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}
console.log(removeSpaces("  Hel l o World  ")); // HelloWorld
// /\s+/g matches all whitespace characters (spaces, tabs, newlines) globally.