const prompt = require("prompt-sync")();

//Is it the weekend?
let day = undefined;
function isItTheWeekend(day) {
    day = parseInt(prompt('What is the day of the week? (1-7): '));
    if (day == 7 || day == 1) {
        return true;
    } else {
        return false;
    }
}
isItTheWeekend();
console.log(day);

//Even number divisable by 9
function evNineIble(value) {
    value = parseInt(prompt('Enter a number: '));
    if (value % 9 == 0 && value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

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
    console.log('There are 3 emotions assigned to their numbers: \n1: Neutral \n2: Angry \n3: Laughing');
    polter = parseInt(prompt('Which number of emotion is polter experiencing?: '));
    wolter = parseInt(prompt('Which number of emotion is wolter experiencing?: '));
    if (polter & wolter == 2 || polter & wolter == 3 || polter == 2 & wolter == 3 || polter == 3 & wolter == 2) {
        return true;
    } else {
        return false;
    }
}
