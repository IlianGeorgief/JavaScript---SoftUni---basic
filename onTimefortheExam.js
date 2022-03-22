function onTimefortheExam(input) {
    let hExamStart = Number(input[0]);
    let mExamStart = Number(input[1]);
    let hArrive = Number(input[2]);
    let mArrive = Number(input[3]);

    let timeExam = hExamStart * 60 + mExamStart;
    let timeArrive = hArrive * 60 + mArrive;

    if (timeArrive > timeExam) {
        console.log("Late")
        let timeLate = timeArrive - timeExam;
        if (timeArrive - timeExam < 60 && timeArrive - timeExam > 0) {
            console.log(`${timeLate} mmminutes after the start`);
        } else if (timeArrive - timeExam >= 60) {
            let tHour = Math.floor(timeLate / 60);
            let tMin = timeLate % 60;
            if (tMin < 10) {
                console.log(`${tHour}:0${tMin} hours after the start`);
            } else {
                console.log(`${tHour}:${tMin} hours after the start`);
            }
        }

    }
    else if (timeArrive <= timeExam && timeExam - timeArrive <= 30) {
        console.log("On time");
        if (timeExam - timeArrive < 1) {
            console.log(`mmminutes before the start`);
        }

    } else {
        console.log("Early");
        if (timeExam - timeArrive > 30) {
            console.log(`hh:mm hours before the start`)
        }

    }



}

onTimefortheExam(["9", "00", "10", "30"])