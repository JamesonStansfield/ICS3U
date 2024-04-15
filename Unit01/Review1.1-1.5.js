const prompt = require("prompt-sync")();

//Task:

const start = () => {
    let tempInput = prompt("Enter a temperature like 30C or 120F: ");
    tempInput = tempInput.toUpperCase();
    console.log("Your input: " + tempInput);
    let lastLetter = tempInput[tempInput.length];
    tempInput = parseInt(tempInput);
    console.log("Your integer input: " + tempInput);
;}

start();


/*
Notes:
line 5: starts a function
line 7: converts the imput to an uppercase letter(Ex: 30c -> 30C)
line 9: stores the last letter (the 'C' or 'F') in a variable
line 10: converts the input into an integer
*/