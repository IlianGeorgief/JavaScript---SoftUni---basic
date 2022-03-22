function summerOutfit(input) {
    let degrees = Number(input[0]);
    let day = input[1];

    let outFit = "";
    let shoes = "";

    if (day === "Morning") {
        if (degrees >= 10 && degrees <= 18) {
            outFit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (degrees > 18 && degrees <= 24) {
            outFit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 25) {
            outFit = "T-Shirt";
            shoes = "Sandals";
        }

    } else if (day === "Afternoon") {
        if (degrees >= 10 && degrees <= 18) {
            outFit = "Shirt";
            shoes = "Moccasins";
        } else if (degrees > 18 && degrees <= 24) {
            outFit = "T-Shirt";
            shoes = "Sandals";
        } else if (degrees > 25) {
            outFit = "Swim Suit";
            shoes = "Barefoot";
        }

    } else if (day === "Evening") {       
            outFit = "Shirt";
            shoes = "Moccasins";       
    }

    console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);
}

    summerOutfit(["28","Evening"])