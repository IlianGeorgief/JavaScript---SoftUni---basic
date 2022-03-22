function fruitMarket(input) {
    let berriesPrice = Number(input[0]);
    let bananasKilos = Number(input[1]);
    let orangesKilos = Number(input[2]);
    let raspberriesKilos = Number(input[3]);
    let berriesKilos = Number(input[4]);

    let raspberriesPrice = berriesPrice / 2;
    let orangesPrice = raspberriesPrice - (0.4 * raspberriesPrice);
    let bananasPrice = raspberriesPrice - (0.8 * raspberriesPrice);

    let sumRaspberries = raspberriesKilos * raspberriesPrice;
    let sumOranges = orangesPrice * orangesKilos;
    let sumBananas = bananasPrice * bananasKilos;
    let sumBerries = berriesPrice * berriesKilos;

    let mustSum = sumRaspberries + sumOranges + sumBananas + sumBerries;

    console.log(mustSum)
}

fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"])