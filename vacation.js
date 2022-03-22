function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let haveMoney = Number(input[index]);
    index++;

    let counter = 0;
    let daycounter = 0;

    while (haveMoney < needMoney) {
        daycounter++;
        let action = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;
        if (action === "spend") {
            haveMoney -= currentMoney;
            if (haveMoney < currentMoney) {
                haveMoney = 0;
            }
            counter++;
        } else {
            haveMoney += currentMoney;
            counter = 0;
        }
        if (counter === 5) {
            console.log("You can't save the money.");
            console.log(daycounter);
            break;
        }

    }
    if (haveMoney >= needMoney) {
        console.log(`You saved the money for ${daycounter} days.`);
    }
}

vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])

