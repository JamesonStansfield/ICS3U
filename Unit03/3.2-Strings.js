const prompt = require('prompt-sync')();

//Lesson Tasks:

//Task #1: Reverse Of Given

function reverse(str) {
    let arrayStr = str.split("");                           //splits up the string into peices, Ex: ['J', 'a', 'm', 'e', 's', 'o', 'n']
    let revArray = arrayStr.reverse();                      //reverses that array  
    let joinArray = revArray.join("");                      //Assembles the array back into a string
    return joinArray;                                       //Returns the string as the function
}
//console.log(reverse("Jameson"));                          //Function Declaration (Remove comment to run)


//Task #2: Dragons And Goblins

function dragons_and_goblins(str) {
	let scoreD = 0;
	let scoreG = 0;
	for (let i = 0; i < str.length; i++) {                  //declaring "i" so that is cycles through until it reaches the end of the string
		if (str.charAt(i) == 'd') {                         //checking for "d" on the current string letter
			scoreD += 1;
		} else if (str.charAt(i) == 'g') {                  //checking for "g" on the current string letter
			scoreG += 1;
		}
	}
	console.log(`There are ${scoreD} d's in the string`)
	console.log(`There are ${scoreG} g's in the string`)
}


//dragons_and_goblins("ddwertdgoiuhgg")                     //Funciton Declaration


//Task #3: Adding String

function add(str) {
	let sum = 0;
	for (let b = 0; b < str.length; b++) {                  //declaring "b" to cycle through until the end of the string
		sum += Number(str.charAt(b));                       //adding the current string number to the sum and converting it into an integer
	}
	console.log(`Sum: ${sum}`);
}


//add("34753958754");                                       //Function Declaration




//Task #4: Subtraction and addition

function add_subtract(str) {
	let sum = 0;
	for (let b = 0; b < str.length; b++) {                  //using "b" to add each cycle until it has cleared the entire string
		if (str.charAt(b) == "-") {                         //checking for the minus sign
		b++;
		sum -= Number(str.charAt(b));                       //the previous line skips to the next string number so that this line can subtract it
	} else {
		sum += Number(str.charAt(b));                       //otherwise, it can add like usual
	    }
	}
	console.log(`Sum: ${sum}`);
}


//add_subtract("12-26-45");                                 //Function Declaration