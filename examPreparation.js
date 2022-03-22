function examPreparation(input) {
    let index = 0;
    let countGrade = Number(input[index]);
    index++;

    let command = index[index];
    index++;

    let counter = 0;
    let sum = 0;
    let problemCounter = 0;
    let lastTask = "";

    while (command !== "Enough") {
        let taskName = command;
        let grade = Number(input[index]);
        index++;
        sum += grade;
        problemCounter++;
        lastTask = taskName;

        if (grade <= 4) {
            counter++;
        }
        if (counter === countGrade) {
            console.log(`You need a break, ${countGrade} poor grades.`);
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Enough") {
        let average = sum / problemCounter;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastTask}`);
    }

}


examPreparation(["2",
"Income",
"3",
"GameInfo",
"6",
"BestPlayer",
"4"])
