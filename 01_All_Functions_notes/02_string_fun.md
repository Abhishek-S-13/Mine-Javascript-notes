##  📝 1. length
``` Javascript
let str = "Hi Abhishek";
console.log(str.length); // 11
```

## 📝 2. toUpperCase()
``` Javascript
let str1 = "abhishek";
console.log(str1.toUpperCase());  // ABHISHEK
```

## 📝 3 toLowerCase()
``` Javascript
let str2 = "ABHISHEK";
console.log(str2.toLowerCase()); // abhishek
```

## 📝 4. charAt(index): Returns the character at the specified index.
``` Javascript
let str3 = "Abhishek";
console.log(str3.charAt(4)); // s
```

## 📝 5. indexOf(substring): Returns the index of the first occurrence of the substring. Returns -1 if not found.
``` Javascript
let str4 = "Hi, Abhishek";
console.log(str4.indexOf("Abhi")); // 4: A is the 4th position start with 0
```

## 📝 6. includes(substring): Returns true if the string contains the given substring.
``` Javascript
let str5 = "Abhishek is good!";
console.log(str5.includes("goo")); // true
```

## 📝 7. slice(start, end): Extracts a part of a string and returns it as a new string.
``` Javascript
let str6 = "Abhishek";
console.log(str6.slice(0, 4)); // Abhi : slice from 0 to 4
```

## 📝 8. substring(start, end): Similar to slice, but doesn't accept negative indices.
``` Javascript
let str7 = "Abhishek";
console.log(str7.substring(4, 10)); // shek
```

## 📝 9. replace(searchValue, newValue): Replaces part of the string with a new value (only first match by default).
``` Javascript
let str8 = "Hi, Abhishek!";
console.log(str8.replace("Hi", "Hello")); // Hello, Abhishek!
console.log(str8.replace("h", "Hello")); // Hi, AbHelloishek!
```

## 📝 10. trim(): Removes whitespace from both ends of the string.
``` Javascript
let str9 = "   Abhi   ";
console.log(str9.trim());   // Abhi
```

## 📝 11. split(separator): Splits the string into an array using the specified separator.
``` Javascript
let str10 = "apple,banana,orange";
let fruits = str10.split(",");
console.log(fruits); // [ 'apple', 'banana', 'orange' ]
```

## 📝 12. concat(): Combines two or more strings.
``` Javascript
let str11 = "Hi";
let str12 = "Abhi";
console.log(str11.concat(" ", str12));  // Hi Abhi
```