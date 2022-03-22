function sumOfTwoNumbers(input) {
    let index = 0;
    let x = Number(input[index])
    index++;
    let y = Number(input[index]);
    index++;
    let magicN = Number(input[index]);

    let counter = 0;
    let coun = 0;
    for (let i = x; i <= y; i++) {
        for (let z = x; z <= y; z++) {
            counter++;

            if (i + z === magicN) {
                console.log(`Combination N:${counter} (${i} + ${z} = ${magicN})`);
                return;
            }
            else {
                coun++;
            }
        }
    }
    console.log(`${coun} combinations - neither equals ${magicN}`);
}

sumOfTwoNumbers(["88", "888", "2000"]);

sumOfTwoNumbers(["1", "10", "5"]);