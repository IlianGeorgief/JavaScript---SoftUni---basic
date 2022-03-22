function traveling(input) {
    let index = 0;
    let destination = input[index++];
    let price = input[index++];

    let massiveLine = input[index];
    let sum = 0;

    while (massiveLine !== "End") {

        while (sum < price) {
            massiveLine = input[index++];
            sum += Number(massiveLine);
        }
        if (sum >= price) {
            console.log(`Going to ${destination}!`);
            sum = 0;
            destination = input[index++];
            massiveLine = input[index++];
            price = Number(massiveLine);
        }
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
