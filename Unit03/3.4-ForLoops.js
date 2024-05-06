const prompt = require('prompt-sync')();

//My Tasks:

//Task #1: Printing to the console

//1
function countUp(start, stop) {
    for (let i = start; i <= stop; i++) {                   //setting i to loop until it reaches the end
        console.log(i);                                     //prints i for each odd number
    }
}

//countUp(1, 15);                                           //function declared

//2
function countDown(start, stop) {
    for (let i = start; i >= stop; i--) {                   //setting i to loop untill it reaches the end
        console.log(i);                                     //printing i to the console for each odd number
    }
}

//countDown(15, 1);                                         //function declared

//Task #2: Returning a value

//1
function sum(n) {
    let addSum = 0;
    for (let i = 0; i <= n; i++) {                          //letting the variable i count through and increasing the sum each loop
        addSum += i;
    }
    return addSum;
}

//console.log(sum(7));                                      //function declared

//2

function count4(begin, end) {
    let score = 0;
    for (let d = begin; d < end; d++) {
        if (d % 4 == 0) {                                   //checking each loop whether the current integer, d, is divisible by 4
            score += 1;                                     //if so, the amout increates
        }
    } return score;
}

//console.log(count4(5, 43));                               //function declared

//3

function sum_divisible(n, x) {
    let score = 0;
    for (let d = 0; d < n; d++) {                           //letting it loop until it reaches the end of the integer
        if (d % x == 0) {                                   //checking to see if it is divisible by the other number
            score += d;                                     //adding the one if its divisible
        }
    } return score;
}


//console.log(sum_divisible(32, 6))                         //function declared