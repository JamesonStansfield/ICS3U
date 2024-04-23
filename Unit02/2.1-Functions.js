const prompt = require("prompt-sync")();

//Who Are You
function whoAreYou() {
    let userName = prompt('What is your name?: ');
    let userAge = parseInt(prompt('How old are you? (Ex: 16): '))
    let userHobby = prompt('What is your favourite hobby?: ');
    console.log('Hello, ' + userName + ', you are ' + userAge + ' years old and your favourite hobby is ' + userHobby + '!');
};

//Tax Calculator
function tax_calculator(dollars) {
    let dollars = parseInt(prompt('How much money do you have to convert?: '));
    let taxxedSum = dollars * 1.13;
    console.log('Your Sum Including Tax: ' + taxxedSum + '\n Tax Added (13%) ');
};

//Calculator
function calculator(operator) {
    let firstNumber = parseInt(prompt('Give me your first number: '));
    let secondNumber = parseInt(prompt('Give me your second number: '));
    if (firstNumber >= secondNumber) {
        let sumSub = firstNumber - secondNumber;
        console.log(firstNumber + '-' + secondNumber + '=' + sumSub);
        let sumDiv = firstNumber / secondNumber;
        console.log(firstNumber + '/' + secondNumber + '=' + sumDiv);
        let sumAdd = firstNumber + secondNumber;
        console.log(firstNumber + '+' + secondNumber + '=' + sumAdd);
        let sumMult = firstNumber * secondNumber;
        console.log(firstNumber + 'x' + secondNumber + '=' + sumMult);
    } else if (firstNumber < secondNumber) {
        let sumMult = firstNumber * secondNumber;
        console.log(firstNumber + 'x' + secondNumber + '=' + sumMult);
        let sumAdd = firstNumber + secondNumber;
        console.log(firstNumber + '+' + secondNumber + '=' + sumAdd);
    }
};

//Pythagorean Theorem

function pythagorean(legA, legB, Hypoteneuse) {
    let legA = 0;
    let legB = 0;
    let Hypoteneuse = 0;
    let userPick = prompt('What are you solving for? (Options: legA, legB, Hypoteneuse): ')
    userPick = userPick.toLowerCase;
    if (userPick == 'lega' || 'legb') {
        userPick = userPick.toLocaleUpperCase[userPick.length -1];
    }
    if (userPick == 'hypoteneuse') {
        legA = parseInt(prompt('What is the "a" leg?: '));
        legB = parseInt(prompt('What is the "b" leg?: '));
        Hypoteneuse = Math.sqrt(legA**2 + legA**2);
        console.log('The hypoteneuse is: ' + Hypoteneuse);
    } else if (userPick == 'LegA') {
        Hypoteneuse = parseInt(prompt('What is the hypoteneuse: '));
        legB = parseInt(prompt('What is the "b" leg?: '));
        legA = Math.sqrt(Hypoteneuse**2 - legB**2);
        console.log('The "a" leg is: ' + legA);
    } else if (userPick == 'legB') {
        Hypoteneuse = parseInt(prompt('What is the hypoteneuse: '));
        legA = parseInt(prompt('What is the "a" leg?: '));
        legB = Math.sqrt(Hypoteneuse**2 - legA**2);
        console.log('The "b" leg is: ' + legB);
    }
};

//Tasks Above

//Functions:
//whoAreYou();
//tax_calculator();
//calculator();
//pythagorean();