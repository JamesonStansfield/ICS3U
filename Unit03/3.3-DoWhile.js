const prompt = require('prompt-sync')();

//My Tasks:

//Task #1: Negative Only

function negativeOnly() {
    do {
        let int = parseInt(prompt("Enter a negative number: "));        
        neg = Math.sign(int)                                            //Setting a variable storing wether the integer is negtive or not
    } while (neg == 1);                                                 //repeat While the negative checker is = 1 (means its positive, -1 means its negative)
}


//negativeOnly();                                                       //Function Declaration

//Task #2: Print Odd

function printOdd(n) {
    let i = 0;
    do {
        if (i % 2 != 0) {                                               //if this condition is met, it will print the odd number
            console.log(i);
        }
        i++;                                                            //adding 1 to "i" so that it keeps going up and increasing
    } while (i <= n);                                                   //once "i" is equal to the integer, the function will end
}

//printOdd(9);                                                          //Function Declaration

//Task #3 Parrot Until Quit

function parrotUntilQuit() {
    do {
        quit = prompt("Type 'Quit' to leave: ");
        quit = quit.toUpperCase();                                      //converting it to uppercase so that the user input is not case sensitive
    } while (quit != 'QUIT');                                           //This loop will repeat unless "quit" is typed
    console.log("Goodbye!");
}

//parrotUntilQuit();1                                                   //Function declaration

//Task #4: Factorial

function factorial(n) {
    let fa = n = n * (n - 1) * (n - 2) * (n - 3) * (n - 4);             //Factorial Equation
    return fa;
}


//console.log(factorial(5));                                            //Function declaration