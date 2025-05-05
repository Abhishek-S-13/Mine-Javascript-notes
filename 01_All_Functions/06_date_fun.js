/* I completed this work on May 5, 2025, at 2:20 PM. Monday */

// 1. new Date(): Creates a new date object with the current date and time.
let now = new Date();
console.log("1. new Date() : ",now); // current date and time - 2025-05-05T08:51:20.610Z

// 2. Date.now(): Returns the number of milliseconds since January 1, 1970 (Unix timestamp).
console.log("2. Date.now() : ",Date.now()); // 1746435080629

// 3. getFullYear(): Returns the 4-digit year.
let date3 = new Date();
console.log("3. getFullYear() : ",date3.getFullYear()); // 2025 - (or current year)

// 4. getMonth(): Returns the month (0-11). January is 0.
let date4 = new Date();
console.log("4. getMonth() : ",date4.getMonth()); // 4 - for May

// 5. getDate(): Returns the day of the month (1-31).
let date5 = new Date();
console.log("5. getDate() : ",date5.getDate()); // 5 - (if today is May 5)

// 6. getDay(): Returns the day of the week (0-6). Sunday is 0.
let date6 = new Date();
console.log("6. getDay() : ",date6.getDay()); // 1 for Monday

// 7. getHours(), getMinutes(), getSeconds(): Return the respective time units.
let date7 = new Date();
console.log("7. getHours() : ",date7.getHours());   // Output: current hour
console.log("7. getMinutes() : ",date7.getMinutes()); // Output: current minute
console.log("7. getSeconds() : ",date7.getSeconds()); // Output: current second

// 8. setFullYear(year): Sets the year of a date object.
let date8 = new Date();
date8.setFullYear(2030);
console.log("8. setFullYear(2030) : ",date8.getFullYear()); // 2030

// 9. setMonth(month): Sets the month (0-11).
let date9 = new Date();
date9.setMonth(11); // December
console.log("9. setMonth(month) : ",date9); // 2025-12-05T08:51:20.635Z - Date updated to December

// 10. toDateString(): Returns the date as a readable string.
let date10 = new Date();
console.log("10. toDateString() : ",date10.toDateString()); // Mon May 05 2025

// 11. toISOString(): Returns the date in ISO format.
let date11 = new Date();
console.log("11. toISOString() : ",date11.toISOString()); // 2025-05-05T08:51:20.636Z

// 12. toLocaleDateString(): Returns the date formatted for the local region.
let date12 = new Date();
console.log("12. toLocaleDateString() : ",date12.toLocaleDateString()); // 5/5/2025 - Output varies by locale

// 13. toLocaleTimeString(): Returns the time formatted for the local region.
let date13 = new Date();
console.log("13. toLocaleTimeString() : ",date13.toLocaleTimeString()); // 2:21:20 pm

// 14. Date.parse(): Parses a date string and returns the timestamp.
let timestamp14 = Date.parse("2025-05-05T00:00:00");
console.log("14. Date.parse() : ",timestamp14); //  1746383400000 - milliseconds since 1970