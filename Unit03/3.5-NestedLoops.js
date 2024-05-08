const prompt = require("prompt-sync")();

//Task #1: Print Line

function print_line() {
    console.log('🥑 Generator')
    let askNum = 1;                                                 //Setting the user input to 1 temporarily to enter the while loop
    while (askNum > 0) {                                            //While loop will stop repeating once there is a negative #
        askNum = parseInt(prompt("Enter A Number Of 🥑's : "));
        let emoji = "🥑";
        let outPut = "";                                            //Creating an empty string that can be filled with avocadoes
        for (let i = 0; i < askNum; i++) {                          //Updating i until it hits the user input amount
            outPut += emoji;                                        //Adding one avocado each time: (Ex: user input = 6, there will be 6 emojis)
        }
        console.log(outPut);
    }
}
//print_line();                                                     //Function Declaration


//Task #2: Print Square

function print_square() {                                           //Everything is the same from [print_line] in the while loop below:
    console.log('🥑 Generator')
    let askNum = 1;
    while (askNum > 0) {
        askNum = parseInt(prompt("Enter A Number Of 🥑's : "));
        let emoji = "🥑";
        let outPut = "";
        for (let i = 0; i < askNum; i++) {
            outPut += emoji;
        }
        for (let t = 0; t < askNum; t++) {                          //To square it (askNum * askNum), I add t to cycle through
            console.log(outPut);                                    //logs another row, the times of the user input
        }
    }
}
//print_square();                                                   //Function Declaration