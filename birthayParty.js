function priceParty (input) {
let rentHall = Number(input[0]);
let cake = rentHall * 20 / 100;
let drinks = cake * 55 / 100;
let animator = rentHall / 3;

let fullPrice = rentHall + cake + drinks + animator;

console.log(fullPrice);
}

priceParty(["3720"])