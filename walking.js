function walking(input) {
    let index = 0;
    let comand = input[index];
    let steps = 0;
    let length = input.length;

    while (index < length) {
        index++;
        if (comand === "Going home") {
            comand = 0;
        }
        let step = Number(comand);
        steps += step;
        comand = input[index];
    }

    if (steps >= 10000) {
        console.log(`Goal reached! Good job!`);
        console.log(`${steps - 10000} steps over the goal!`);
    } else {
        console.log(`${10000 - steps} more steps to reach goal.`);
    }
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])

