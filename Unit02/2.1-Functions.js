const prompt = require("prompt-sync")();

//Who Are You
function whoAreYou() {
    let userName = prompt('What is your name?: ');
    let userAge = parseInt(prompt('How old are you? (Ex: 16): '))
    let userHobby = prompt('What is your favourite hobby?: ');
    console.log('Hello, ' + userName + ', you are ' + userAge + ' years old and your favourite hobby is ' + userHobby + '!');
}
whoAreYou();

//Tax Calculator
function tax_calculator() {
    let dollars = parseInt(prompt('How much money do you have to convert?: '));
    let taxedSum = dollars * 1.13;
    console.log('Your Sum Including Tax: ' + taxedSum + '\n Tax Added (13%) ');
}
tax_calculator();

//Calculator
function calculator(operator) {
    let firstNumber = parseInt(prompt('Give me your first number: '));
    let secondNumber = parseInt(prompt('Give me your second number: '));
    if (operator == '+') {
        let sumAdd = firstNumber + secondNumber;
        console.log(firstNumber + '+' + secondNumber + '=' + sumAdd);
    } else if (operator == '-') {
        let sumSub = firstNumber - secondNumber;
        console.log(firstNumber + '-' + secondNumber + '=' + sumSub);
    } else if (operator == '*') {
        let sumMul = firstNumber * secondNumber;
        console.log(firstNumber + 'x' + secondNumber + '=' + sumMul);
    } else if (operator == '/') {
        let sumDiv = firstNumber / secondNumber;
        console.log(firstNumber + '/' + secondNumber + '=' + sumDiv);
    }
}
//enter operator of choice here:
calculator('/');

//Pythagorean Theorem

function pythagorean(legA, legB, hypotenuse) {
    if (legA !== undefined && legB !== undefined && hypotenuse == undefined) {
        hypotenuse = Math.sqrt(legA ** 2 + legB ** 2);
        console.log('The hypotenuse is: ' + hypotenuse);
    } else if (legA == undefined && legB !== undefined && hypotenuse !== undefined) {
        legA = Math.sqrt(hypotenuse ** 2 - legB ** 2);
        console.log('The "a" leg is: ' + legA);
    } else if (legA !== undefined && legB == undefined && hypotenuse !== undefined) {
        legB = Math.sqrt(hypotenuse ** 2 - legA ** 2);
        console.log('The "b" leg is: ' + legB);
    }
}
pythagorean(4, undefined, 7);
//Tasks Above


