function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let higth = Number(input[2]);

    let vol = width * length * higth;
    let index = 3;
    let sum = 0;
    let current = input[index];


    while (current !== "Done") {
        sum += Number(input[index]);
        index++;
        if (sum > vol) {
            break;
        }

        current = input[index];
    }
    if (sum > vol) {
        console.log(`No more free space! You need ${sum - vol} Cubic meters more.`);
    } else {
        console.log(`${vol - sum} Cubic meters left.`);
    }

}

moving(["10",
"1",
"2",
"4",
"6",
"Done"])

