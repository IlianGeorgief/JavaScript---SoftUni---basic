function leapYears(input) {
    let leap = Number(input[0]);
    let anyYear = Number(input[1]);

    for (let i = leap; i <= anyYear; i++) {
        if (i % 4 === 0) {
            console.log(i);
        }
    }

}

leapYears(["1908","1919"])