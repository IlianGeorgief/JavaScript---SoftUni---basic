function salary(input) {
    let index = 0;
    let openTabs = Number(input[index]);
    index++;
    let incSalary = Number(input[index]);
    index++;

    for (let i = 0; i < openTabs; i++) {
        let currTabs = input[index];
        index++;

        if (currTabs === "Facebook") {
            incSalary -= 150;
        }
        if (currTabs === "Instagram") {
            incSalary -= 100;
        }
        if (currTabs === "Reddit") {
            incSalary -= 50;
        }

    }
    if (incSalary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(incSalary);
    }

}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])


