function sumOfTwo(input) {
    let min = Number(input[0]);
    let max = Number(input[1]);
    let magicN = Number(input[2]);

    let counter = 0;
    
    for (let a = min; a <= max; a++) {
        for (let b = min; b <= max; b++) {
            counter++;
            if (a + b === magicN) {
                console.log(`Combination N: ${counter} (${a} + ${b} = ${magicN})`);
                return;
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicN}`);
}

sumOfTwo (["1", "10", "5"]);
sumOfTwo (["88", "888", "2000"]);