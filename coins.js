function coins(input) {
    let change = Number(input[0]);
    let moneyInCoins = Math.floor(change * 100);
    let countMoney = 0;

    while (moneyInCoins >= 0) {
        if (moneyInCoins >= 200) {
            countMoney++;
            moneyInCoins -= 200;

        } else if (moneyInCoins >= 100) {
            countMoney++;
            moneyInCoins -= 100;

        } else if (moneyInCoins >= 50) {
            countMoney++;
            moneyInCoins -= 50;

        } else if (moneyInCoins >= 20) {
            countMoney++;
            moneyInCoins -= 20;

        } else if (moneyInCoins >= 10) {
            countMoney++;
            moneyInCoins -= 10;

        } else if (moneyInCoins >= 5) {
            countMoney++;
            moneyInCoins -= 5;

        } else if (moneyInCoins >= 2) {
            countMoney++;
            moneyInCoins -= 2;
        } else if (moneyInCoins >= 1) {
            countMoney++;
            moneyInCoins -= 1;
        }
        else {
            break;
        }

    }
    console.log(countMoney);

}

coins(["0.56"]);