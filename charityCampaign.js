function charityCampaign (input) {
let cake = 45;
let waffle =  5.8;
let pancake = 3.2;

let currentDays = Number(input[0]);
let cookers = Number(input[1]);
let cakes = Number(input[2]);
let waffles = Number(input[3]);
let pancakes = Number(input[4]);

let sumOfCakes = cake * cakes;
let sumOfwffles = waffle * waffles;
let sumOfpancakes = pancake * pancakes;
let allProducts = sumOfCakes + sumOfwffles + sumOfpancakes
let allSumForDay = allProducts * cookers;
let sumForAllCampaign = allSumForDay * currentDays;
let clearSum = sumForAllCampaign - sumForAllCampaign / 8;

console.log(clearSum)
}

charityCampaign(["131","5","9","33","46"])