const prompt = require("prompt-sync")();

//Is it the weekend?

function isItTheWeekend(day) {
    day = parseInt(prompt('What day of the week is it? (1-7): '));
    if (day == 7 || day == 1) {
        return true;
    } else {
        return false;
    }
}

let result = isItTheWeekend();
console.log('Is it the weekend: ' + result);



//Even number divisable by 9
function evNineIble(value) {
    value = parseInt(prompt('Enter a number: '));
    if (value % 9 == 0 && value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let isDiv = evNineIble();
console.log('Is it divisible and even?: ' + isDiv);



//Surface area of a cylinder (medium)
function areaCircle(r) {
    r = parseInt(prompt('Enter the Radius: '));
    let area = Math.PI * r**2;
    return area;
}
function areaLabel(r, h) {
    h = parseInt(prompt('Enter the height of the cylinder: '));
    let label = 2 * Math.PI * r (r + h);
    return label;
}
function areaCylinder(r, h) {
    let TSA = 2 * Math.PI * r * h + 2 * Math.PI * r**2;
    return TSA;
}


//Creepy Ghosts
function ghostWatch(polter, wolter) {
    if (polter && wolter == 2 || polter && wolter == 3 || polter == 2 && wolter == 3 || polter == 3 && wolter == 2) {
        return true;
    } else {
        return false;
    }
}
let emotion = ghostWatch(2, 2);
console.log('Too much emotion?: ' + emotion);