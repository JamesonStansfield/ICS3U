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
    let last = arr[0].length;                           //the previouse is initiated as the first
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count = 0;                                      //reset counter
        for (let l = 0; l < arr[i].length; l++) {
            count += 1;                                 //counts the length of the string
        }
        if (count > longest) {                          //if the count integer is larger than the longest (which is either larger than the starting value or another string), set the integer
            longest = count;
        }
        last = arr[i];                                  //update the previous
    }
    return longest;                                     //after checking everything, return the longest
}

//console.log(longest_string(['Mr', 'Jamieson', 'Is', 'The', 'Best', 'Teacher']));          //function decleration


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


//Challenge Tasks:

//Task #5: Min, Max

function min_max(arr) {
    let min = arr[0];                                   //Setting minimum to the first string of the array
    let max = arr[0];                                   //Setting maximum to the first string of the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {                             //Checking if the current string of the array is lower than the minimum
            min = arr[i];                               //If so, update the minimum
        }
        if (arr[i] > max) {                             //Checking if the current string of the array is higher than the maximum
            max = arr[i];                               //If so, update the maximum
        }
    }
    console.log(min, max);
}

//min_max([4,7,2,6,9]);                                   //Funciton calling

//Task #6: Sum

function sum(arr) {
    let sum = 0;                                        //Starting sum at 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];                                  //Checking each integer in the array and adding each to the total sum
    }
    return sum;                                         //Returning it to be logged
}

//console.log(sum([5,3,2]));                            //Function Called
