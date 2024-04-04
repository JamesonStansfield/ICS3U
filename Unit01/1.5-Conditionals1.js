const prompt = require('prompt-sync')();
//Task

let age = Number(prompt("What is your age?"));
if (age >= 50) {
    console.log("You qualify for the senior discount!");
} else if (age < 16) {
    console.log("You're not old enough to drive yet.");
}
let user_name = prompt("What is your name?");
if (user_name = "Mr. J") {
    console.log("🐠");
}
if (user_name.length >= 7) {
    console.log("You have a long name.");
}
let nameLength = Number(prompt("How long is your name?"));
if (nameLength = user_name.length) {
    console.log("That's correct! ✔️");
} else if (nameLength > user_name.length) {
    console.log("Too high ✖️");
} else if (nameLength < user_name.length) {
    console.log("Too low ✖️");
}