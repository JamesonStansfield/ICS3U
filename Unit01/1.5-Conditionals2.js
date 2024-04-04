const prompt = require('prompt-sync')();
//Task

let user_name = prompt("What is your name?: ");
let age = parseInt(prompt("Hello " + user_name + " how old are you?: "));

if (age >= 16) {
    console.log('You are old enough to drive!');
} else {
    console.log('You are not old enough to drive yet.');
}

console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");
let selection = parseInt(prompt("Hi " + user_name + ". Please make a selection "));
if (selection = 1 || 2 || 3 || 4 || 5) {
    console.log("Valid Selection");
} else if (selection != 1 || 2 || 3 || 4 || 5) {
    console.log("Invalid selection.");
}