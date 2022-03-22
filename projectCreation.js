function projectCretion(input){
let name = input[0];
let projects = input[1];
let hours = projects * 3;
let result = "The architect " + name + " will need " + hours + " hours to complete " + projects + " project/s.";

console.log(result)
}
projectCretion(["Sanya","9"])