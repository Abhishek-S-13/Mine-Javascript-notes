function testScope() {
  if (true) {
    var x = 1;        // Function-scoped
    var x = 11;       // ✅ Redeclare allowed

    let y = 2;        // Block-scoped
 // let y = 22;       // ❌ Error: Cannot redeclare
        y = 22;       // ✅ Reassign allowed

    const z = 3;      // Block-scoped and constant
//        z = 20;     // ❌ Error: Cannot reassign

    console.log("Inside block:");
    console.log("x =", x); // 11
    console.log("y =", y); // 22
    console.log("z =", z); // 3
}
console.log("Outside block:");
console.log("x =", x);  // 11 ✅ Accessible (function-scoped)
//  console.log("y =", y); // ❌ Error: y is not defined
//  console.log("z =", z); // ❌ Error: z is not defined
}
testScope();


