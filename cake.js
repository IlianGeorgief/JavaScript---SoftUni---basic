function cake(input) {
    let whidth = Number(input[0]);
    let long = Number(input[1]);
    let index = 2;

    let cake = whidth * long;
    let counter = 0;
    let piceCount = 0;
    let pieces = 0;

    while (counter !== "STOP") {

        pieces += piceCount;
        counter = input[index];
        piceCount = Number(input[index]);
        index++;
        if (pieces > cake) {
            let howManyPieces = pieces - cake;
            console.log(`No more cake left! You need ${howManyPieces} pieces more.`);
            break;
        } if (counter === "STOP") {
            console.log(`${cake - pieces} pieces are left.`);
        }
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])


