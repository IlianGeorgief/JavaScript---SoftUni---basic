function depositCalculator(input) {
let depositSuma = Number(input[0]);
let depositMonts = Number(input[1]);
let percentageForYear = Number(input[2]);

let interst = depositSuma * percentageForYear / 100;
let forMonth = interst / 12;
let all = depositSuma + depositMonts * forMonth;
    console.log(all)
}
depositCalculator(["2350","6","7"])