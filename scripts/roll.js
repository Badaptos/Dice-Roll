function diceRoll(){
    switch(Math.floor(Math.random()* 7)){ //this will take the random number that math.random gives you, multiply it by 7 and then round it to the lowest whole interger using Math.floor. effectively our random number will never go to 7.
        case 1:
            alert('1');
            break;
        case 2:
            alert('2');
            break;
        case 3:
            alert('3');
            break;
        case 4:
            alert('4');
            break;
        case 5:
            alert('5');
            break;
        case 6:
            alert('6');
            break;
    }
}

//WHEN BUTTON IS CLICKED .RAINBOW_BORDER WILL BE ADDED TO RESULTS DIV
var resultBorder = document.getElementById('result');
function selection(){
    resultBorder.classList.add('rainbow_border');
}

var rollResult = diceRoll;
