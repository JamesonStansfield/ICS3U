const prompt = require("prompt-sync")();

//Test Scope---------------------------------------------------------------------------------------------------------------------------
//Correct Scope
function correctScope() {
    let scopeVar = 57;
    if (scopeVar = 57) {
        console.log('The variable "scopeVar", is a local variable. It is assigned as: ' + scopeVar);
    }
}
correctScope();

//Incorrect Scope
let golbalVar = true;
function incorrectScope() {
    if (golbalVar = true) {
        console.log('This variable is not local, its global.');
    }
}
incorrectScope();

//Operation Plumber--------------------------------------------------------------------------------------------------------------------
/*
Unit 2 Lesson 3: Basic understanding of scope

Author's Name: Jameson Stansfield
*/

let waterTemp = undefined;
console.log(hotWater());

function hotWater() {
  waterTemp = "cold";
  if (waterBoilerSwitch() == false){
    waterBoilerSwitch();
    
  }
  return waterTemp;
}

function waterBoilerSwitch(){
  if (waterTemp == "cold") {
    waterTemp = "hot";
    return true;
  } else {
    waterTemp = "cold";
    return false;
  }
}