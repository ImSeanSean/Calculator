//Variables
const output = document.getElementById("output");
let value;
let memory;
//State Checkers
let clearNext = false;
let lastOperation;
let lastValue;
//Functions
function appendToOutput(input){
    if(clearNext == true){
        output.textContent = "";
        clearNext = false;
    }
    output.textContent += input;
}
function appendDecimal(){
    if(clearNext == true){
        output.textContent = "";
        clearNext = false;
    }
    if(!output.textContent.includes('.')){
        if(output.textContent == ""){
            output.textContent += '0.';
        }
        else{
            output.textContent += '.';
        }
    }
}
//Basic Math Functions
function addition(){
    if (value == null){
        value = parseInt(output.textContent, 10);
        output.textContent = "";
    }
    else{
        value = value + parseInt(output.textContent, 10);
        output.textContent = value;
    }
    clearNext = true;
    lastOperation = "addition";
}
function subtraction(){
    if (value == null){
        value = parseInt(output.textContent, 10);
        output.textContent = "";
    }
    else{
        value = value - parseInt(output.textContent, 10);
        output.textContent = value;
    }
    clearNext = true;
    lastOperation = "subtraction";
}
function multiplication(){
    if (value == null){
        value = parseInt(output.textContent, 10);
        output.textContent = "";
    }
    else{
        value = value * parseInt(output.textContent, 10);
        output.textContent = value;
    }
    clearNext = true;
    lastOperation = "multiplication";
}
function division(){
    if (value == null){
        value = parseInt(output.textContent, 10);
        output.textContent = "";
    }
    else{
        value = value / parseInt(output.textContent, 10);
        output.textContent = value;
    }
    clearNext = true;
    lastOperation = "division";
}
function calculate(){
    if(lastOperation == "addition"){
        addition();
    }
    else if(lastOperation == "subtraction"){
        subtraction();
    }
    else if(lastOperation == "multiplication"){
        multiplication();
    }
    else if(lastOperation == "division"){
        division();
    }
    value = null;
}
//Other Functions
function squareRoot(){
    if(output.textContent){
        value = Math.sqrt(parseFloat(output.textContent, 10))
        output.textContent = value;
    }
    clearNext = true;
    lastOperation = "squareroot"
}
function modulo(){
    if (value == null){
        value = parseInt(output.textContent, 10);
        output.textContent = "";
    }
    else{
        value = value % parseInt(output.textContent, 10);
        output.textContent = value;
    }
    clearNext = true;
    lastOperation = "modulo";
}
//Output Functions
function clearOutput(){
    output.textContent = "";
    value = null;
    clearNext = false;
    lastValue = null;
}
function deleteInput(){
    output.textContent = output.textContent.slice(0, -1)
}
function changeSymbol(){
    if(!output.textContent.includes('-')){
        output.textContent = '-' + output.textContent;
    }
    else{
        output.textContent = output.textContent.slice(1);
    }
}