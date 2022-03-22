function vacationBookList(input) {
let numbersOfSheets = Number(input[0]);
let sheetForHour = Number(input[1]);
let daysForRead = Number(input[2]);

let timeAll = numbersOfSheets / sheetForHour;
let hoursForDay = timeAll / daysForRead;

console.log(hoursForDay)
}
vacationBookList(["432","15","4"])