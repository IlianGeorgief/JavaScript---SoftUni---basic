function newHouse(input) {
    let tipeFlowers = input[0];
    let howManyFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    if (tipeFlowers === "Roses") {
        price = howManyFlowers * 5;
        if (howManyFlowers > 80) {
            price = price - price * 0.10;
        }
    } else if (tipeFlowers === "Dahlias") {
        price = howManyFlowers * 3.80;
        if (howManyFlowers > 90) {
            price = price - price * 0.15;
        }
    } else if (tipeFlowers === "Tulips") {
        price = howManyFlowers * 2.80;
        if (howManyFlowers > 80) {
            price = price - price * 0.15;
        }
    } else if (tipeFlowers === "Narcissus") {
        price = howManyFlowers * 3;
        if (howManyFlowers < 120) {
            price = price + price * 0.15;
        }
    } else if (tipeFlowers === "Gladiolus") {
        price = howManyFlowers * 2.50;
        if (howManyFlowers < 80) {
            price = price + price * 0.20;
        }
    }

    if (budget >= price) {
        let levaLeft = budget - price;
        console.log(`Hey, you have a great garden with ${howManyFlowers} ${tipeFlowers} and ${levaLeft.toFixed(2)} leva left.`)
    } else {
        let levaMore = price - budget;
        console.log(`Not enough money, you need ${levaMore.toFixed(2)} leva more.`)
    }
}

newHouse(["Roses", "55", "250"])