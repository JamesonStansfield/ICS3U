const prompt = require('prompt-sync')();

//My Tasks:

//Task #1: Printing to the console

//1
function countUp(start, stop) {
    for (let i = start; i <= stop; i++) {
        console.log(i);
    }
}

//countUp(1, 15);

//2
function countDown(start, stop) {
    for (let i = start; i >= stop; i--) {
        console.log(i);
    }
}

//countDown(15, 1);

//Task #2: Returning a value

//1
function sum(n) {
    let addSum = 0;
    for (let i = 0; i <= n; i++) {
        addSum += i;
    }
    return addSum;
}

//console.log(sum(7));

//2

function count4(begin, end) {
    let score = 0;
    for (let d = begin; d < end; d++) {
        if (d % 4 == 0) {
            score += 1;
        }
    } return score;
}

//console.log(count4(5, 43));

//3

