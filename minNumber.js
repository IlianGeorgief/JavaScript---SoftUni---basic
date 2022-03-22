function minNumber(input) {
    index = 0;
    let num = Number(input[index]);
    index++;
    let min = Number.POSITIVE_INFINITY;    

    for (let i = 1; i <= num; i++) {
        let n = Number(input[index]);
        index++;

        if (n < min) {
            min = n;
        }
    }
    console.log(min);
}

minNumber(["3",
    "-10",
    "20",
    "-30"])

