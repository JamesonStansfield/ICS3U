const prompt = require('prompt-sync')();
/**
 * 3.1 - While Loops
 * Author: Jameson Stansfield
 **/

'use strict';

// The three functions:

//Countdown Function
function countdown(start, stop) {
    while (start >= stop) {
        console.log(start);
        start = start - 1;
    }
    return -1;
}
countdown(10, 1);


//Random Until function
function random_until(min, max, stop) {
    while (stop != max && min) {
        while (max > min) {
            console.log(max);
            max = max -1;
        }
        return -1;
    }
    return stop;
}

random_until(2, 12, 6);


//Average

function average(n) {
    while (n) {
       let val = parseInt(prompt("Enter Value: "));
       val = val + val;
    }
    let avg = val / n;
    console.log(`The average is ${avg}`)
}

average(4);