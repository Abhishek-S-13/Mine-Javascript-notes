function testVariables() {
// Hoisting & Initialization demo (this works, but logs undefined due to var hoisting)
    console.log(a); // undefined
 // console.log(b); // ❌ ReferenceError (let is hoisted but not initialized)
 // console.log(c); // ❌ ReferenceError (const is hoisted but not initialized)

    var a = 1;
    let b = 2;
    const c = 3;

    console.log("Initial values:", a, b, c); // 1 2 3

// ****************** Re-assignment ******************
    a = 10;     // ✅ allowed
    b = 20;     // ✅ allowed
 // c = 30;     // ❌ Error: Assignment to constant variable

    console.log("After re-assignment:", a, b, c); // 10 20 3

// ****************** Re-declaration ******************
    var a = 100;     // ✅ allowed (var can be redeclared in same scope)
 // let b = 200;     // ❌ Error: Identifier 'b' has already been declared
 // const c = 300;   // ❌ Error: Identifier 'c' has already been declared

    console.log("After redeclaration:", a);

// ****************** Scope demonstration  ******************
    if (true) {
        var x = "var in block";     // Function-scoped, accessible outside
        let y = "let in block";     // Block-scoped
        const z = "const in block"; // Block-scoped
        console.log("Inside block:", x, y, z);
    }
    console.log("Outside block:");
    console.log(x); // ✅ accessible
 // console.log(y); // ❌ Error: y is not defined
 // console.log(z); // ❌ Error: z is not defined
}

testVariables();
