function fishTank(input) {
let length = Number(input[0]);
let width = Number(input[1]);
let height = Number(input[2]);
let percentage = Number(input[3]);

let volume = length * width * height;
let liters = volume * 0.001;
let percent = percentage * 0.01;

let realLiters = liters * (1 - percent);

console.log(realLiters)
}

fishTank(["105","77","89","18.5"])