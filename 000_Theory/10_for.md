## For Loop
```Javascript
//  Example 1: only 2 Tables
    function multi(base = 2, index = 10){debugger;
        if(typeof base != "number" && typeof index !="number"){
            throw new TypeError("Error");
        }
        for( i = 1; i<= index; i++){debugger;
            console.log(`${base} x ${i} = ${base * i} `);
        }
    }
      multi(2, 10);

//  Example 2 : from 1 to 10 tables
    function generateMultiplicationQA(min = 1, max = 10){
        for (let i = min; i <= max; i++) {
            for (let j = 1; j <= max; j++) {
                const question = `${i} × ${j}`;
                const answer = i * j;
                console.log(`${question} = ${answer}`);
            }
        }
    }
    generateMultiplicationQA(1, 10);
//  Example 3 : how many digit counts from 1 to 20 -> 31
    let totalDigits = 0;

    for (let i = 1; i <= 20; i++) {debugger;
        // totalDigits = totalDigits + i.toString().length;
        totalDigits += i.toString().length;
        console.log(totalDigits);
    }
    console.log("Total digit count from 1 to 20:", totalDigits); // 31
```