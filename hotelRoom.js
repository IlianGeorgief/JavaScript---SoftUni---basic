function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let studioCost = 0;
    let apartmentCost = 0;


    switch (month) {
        case "May":
        case "October":
            studioCost = 50;
            apartmentCost = 65;
            if (nights > 7 && nights < 14) {
                studioCost = studioCost * 0.95;
            } else if (nights > 14) {
                studioCost = studioCost * 0.70;
                apartmentCost = apartmentCost * 0.90;
            }
            break;
        case "June":
        case "September":
            studioCost = 75.20;
            apartmentCost = 68.70;
            if (nights > 14) {
                studioCost = studioCost * 0.80;
                apartmentCost = apartmentCost * 0.90;
            }
            break;
        case "July":
        case "August":
            studioCost = 76;
            apartmentCost = 77;
            if (nights > 14) {
                apartmentCost = apartmentCost * 0.90;
            }
            break;
    }

    let priceApart = apartmentCost * nights;
    let priceStudio = studioCost * nights;

    console.log(`Apartment: ${priceApart.toFixed(2)} lv.`)
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
}

hotelRoom(["August", "20"])