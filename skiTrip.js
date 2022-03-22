function skiTrip(input) {
    let days = Number(input[0]);
    let typeRoom = input[1];
    let evaluation = input[2];

    let price = 0;
    let nights = days - 1;

    switch (typeRoom) {
        case "apartment":
            if (evaluation === "positive") {
                if (days >= 10 && days <= 15) {
                    price = nights * 25.00;
                    let finalPrice = price - price * 0.35;
                    let result = finalPrice + finalPrice * 0.25;
                    console.log(result.toFixed(2))
                } else if (days < 10) {
                    price = nights * 25.00;
                    let finalPrice = price - price * 0.30;
                    let result = finalPrice + finalPrice * 0.25;
                    console.log(result.toFixed(2));
                } else {
                    price = nights * 25.00;
                    let finalPrice = price - price * 0.20;
                    let result = finalPrice + finalPrice * 0.25;
                    console.log(result.toFixed(2));
                }

            } else if (evaluation === "negative") {
                if (days >= 10 && days <= 15) {
                    price = nights * 25.00;
                    let finalPrice = price - price * 0.35;
                    let result = finalPrice - finalPrice * 0.10;
                    console.log(result.toFixed(2))
                } else if (days < 10) {
                    price = nights * 25.00;
                    let finalPrice = price - price * 0.30;
                    let result = finalPrice - finalPrice * 0.10;
                    console.log(result.toFixed(2));
                } else {
                    price = nights * 25.00;
                    let finalPrice = price - price * 0.20;
                    let result = finalPrice - finalPrice * 0.10;
                    console.log(result.toFixed(2));
                }
            }
            break;
        case "president apartment":
            if (evaluation === "positive") {
                if (days >= 10 && days <= 15) {
                    price = nights * 35.00;
                    let finalPrice = price - price * 0.35;
                    let result = finalPrice + finalPrice * 0.25;
                    console.log(result.toFixed(2))
                } else if (days < 10) {
                    price = nights * 35.00;
                    let finalPrice = price - price * 0.30;
                    let result = finalPrice + finalPrice * 0.25;
                    console.log(result.toFixed(2));
                } else {
                    price = nights * 35.00;
                    let finalPrice = price - price * 0.20;
                    let result = finalPrice + finalPrice * 0.25;
                    console.log(result.toFixed(2));
                }

            } else if (evaluation === "negative") {
                if (days >= 10 && days <= 15) {
                    price = nights * 35.00;
                    let finalPrice = price - price * 0.15;
                    let result = finalPrice - finalPrice * 0.10;
                    console.log(result.toFixed(2))
                } else if (days < 10) {
                    price = nights * 35.00;
                    let finalPrice = price - price * 0.10;
                    let result = finalPrice - finalPrice * 0.10;
                    console.log(result.toFixed(2));
                } else {
                    price = nights * 35.00;
                    let finalPrice = price - price * 0.20;
                    let result = finalPrice - finalPrice * 0.10;
                    console.log(result.toFixed(2));
                }
            }
            break;
        case "room for one person":
            if (evaluation === "positive") {
                price = nights * 18.00;
                let result = price + price * 0.25;
                console.log(result.toFixed(2))
            } else if (evaluation === "negative") {
                price = nights * 18.00;
                let result = price - price * 0.10;
                console.log(result.toFixed(2))
            }
            break;
    }
}

skiTrip(["2", "apartment", "positive"])