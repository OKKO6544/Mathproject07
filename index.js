const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
 display.value= "";
}

function Square(){
    display.value = Math.pow(display.value,2);

}

function Cube(){
    display.value = Math.pow(display.value,3);

}