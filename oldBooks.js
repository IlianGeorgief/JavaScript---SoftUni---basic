function oldBooks(input) {
    let index = 0;
    let foundingBoon = input[index];
    index++;
    let bookFound = false;

    let nextBook = input[index];
    while (nextBook !== "No More Books") {
        if (nextBook === foundingBoon) {
            bookFound = true;
            break;
        }
        index++;
        nextBook = input[index];
    }
    if (bookFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${index - 1} books.`);
    } else {
        console.log(`You checked ${index - 1} books and found it.`);
    }
}

oldBooks (["Troy","Stronger","Life Style","Troy"])
