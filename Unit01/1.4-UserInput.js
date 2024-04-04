//Task

console.log("1.4 - User Input");
let year = prompt("What year were you born?: ");
console.log("You entered " + year);
age = 2024 - year;
console.log("You are likely " + age + "Years old.");
let name = prompt("What is your name?");
console.log("Hi, " + name + ". You were born in " + year + " and you are likely " + age + " years old.");
console.log("Your name is " + name.length + " letters long");

let fahrenheit = prompt("What is the tempurature in fahrenheit, I will convert it to celsius for you.");
let celsius = (fahrenheit - 32) * 5/9;
console.log("The tempurature in celcius is: " + celsius + ".");