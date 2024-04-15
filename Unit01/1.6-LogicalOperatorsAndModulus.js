//My Task:

let playGame = prompt("Do you want to play a game? (y/n)");
if (playGame == "y") {
    let firstNumber = parseInt("Enter a number: ");
    if (firstNumber > 10 && firstNumber < 50) {
        console.log("Your next number should be greater than 50.");
    }
    let secondNumber = prompt("Give me a second number please: ");
    if (secondNumber % 2 == 0) {
        console.log("Next time, give me an odd number.");
    } else {
        console.log("Next time, give me an even number.");
    }
    let thirdNumber = prompt("Ok, give me one last number: ");
    let sum = firstNumber + secondNumber + thirdNumber + 1;
   if (sum % 10 == 0) {
    console.log("Your numbers are squirelly");
   } else {
    console.log("Your numbers are NOT squirelly");
   }
   if (firstNumber % 3 == 0 || secondNumber % 3 == 0 || thirdNumber % 3 == 0) {
    console.log("Your numbers are Jazzy");
   } else {
    console.log("Your numbers are NOT Jazzy");
}

} else {
    return playGame;
}