const prompt = require('prompt-sync')();
/**
 * 3.1 - While Loops
 * Author: Jameson Stansfield
 **/

'use strict';

// The three functions:

//Countdown Function
function countdown(start, stop) {
    while (start >= stop) {         //While the start is greater or equal to the stop number
        console.log(start);         //Showing the starting high number
        start = start - 1;          //subtracting it so that each time, it displays one lower, thus creating the countdown
    }
    return -1;
}
countdown(10, 1);                   //Declaring the coutdown parameters


//Random Until function
function random_until(min, max, stop) {
    while (stop != max && min) {    //Setting the while condition
        while (max > min) {         //while the maximum is greater than the minimum
            console.log(max);       //outputing the maximum
            max = max -1;           //ensuring that the while loop endes
        }
        return -1;
    }
    return stop;                    //ending
}

random_until(2, 12, 6);


//Average

function average(n) {
    let nFinal = n;             //This variable stores the number to divide to get the average, this is because the 'n' variable changes later
    let total = 0;
    let valEnter;
    while (n > 0) {     
        valEnter = parseInt(prompt('Please enter a value: '));
        total += valEnter;
        n = n - 1;              //I subtract 1 from the first 'variable' so that the while loop will finish and complete the desired amount of values
    }
    let avg = total / nFinal;   //Calculating the final avg
    return avg;
}

console.log(average(4));        //Declaration