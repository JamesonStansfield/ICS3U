// -Jameson

//My 3.6 Tasks:

//Task #1: Print Array

function print_array(arr) {
    for (let i = 0; i < arr.length; i++) {              //Cycles through
        console.log(arr[i]);                            //Prints the current array number on each line
    }
}

//print_array([1,7,4,3,8,2,"Mr. Jamieson"]);            //Function Declaration

//Task #2: Min

function min(arr) {
    let l = arr[1];                                     //setting l to be the last/ previous array number so that is checks with i
    let score = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < l) {
            score = arr[i];                             //if a lower number is detected, it sets the current checked array to that
        }
        l = arr[i];                                     //updating the last number each check
    }
    return score;                                       //returning the score/lowest number to be printed
}

//console.log(min([5,5,3,6,-8,2,6,9]));                 //Function Declaration

//Task #3: Longest String

function longest_string(arr) {
    let longest = 0;
    let last = arr[1];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let l = 0; l < arr[i.length]; l++) {
            count += 1;
        }
        if (count > last) {
            longest = arr[i.length];
        }
        last = arr[i];
    }
    return longest;
}

//console.log(longest_string(['Mr', 'Jamieson', 'Is', 'The', 'Best', 'Teacher']));


//Task #4: Contains

let containVals = [1,7,3,4,8,"Jay"];

function contains(arr, value) {
    let current;
    for (let i = 0; i < arr.length; i++) {
        current = arr[i];                               //let the current array string be the i one (the current one)
        if (current == value) {                         //Checking to see if they are the same
            return true;                                //if so, immidiately say true
        }
    }
    return false;                                       //If it checks and finds no matches, return false
}

//console.log(contains(containVals, 7));                //Function Declaration