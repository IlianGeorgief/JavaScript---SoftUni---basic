function password(input) {
    let username = input[0];
    let pass = input[1];
    let data = input[2];
    let counter = 3;

    while (data !== pass) {
        data = input[counter];
        counter++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"])
