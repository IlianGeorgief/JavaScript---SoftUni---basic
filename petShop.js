function petShop(input) {
let priceForMyDog = 2.50;
let priceForOtherDog = 4;
let myDogs = input[0]
let orderDogs = input[1];
let allPrice = priceForMyDog *  myDogs + priceForOtherDog * orderDogs + " lv.";

console.log(allPrice)
}

petShop(["13","9"])