var func = process.argv[2];
var userInput1 = process.argv[3];
var userInput2 = parseInt(process.argv[4]);



switch(func){
    case "add":
        add(userInput1, userInput2)

    break;
    case "subtract":
        subtract(userInput1, userInput2)
    break;
    case "multiply":
        multiply(userInput1, userInput2)
    break;
    case "divide":
        divide(userInput1, userInput2)
    break;
    case "exp":
        exp(userInput1, userInput2)
    case "algebra":
        algebra(userInput1);
    break;
    default:
        console.log("Incorrect Function Type");
        break;
}



function add(userInput1, userInput2){
    console.log(parseInt(userInput1) + userInput2);
}


function subtract(userInput1, userInput2){
    console.log(parseInt(userInput1) - userInput2);
}

function multiply(userInput1, userInput2){
    console.log(parseInt(userInput1) * userInput2);
}

function divide(userInput1, userInput2){
    console.log(parseInt(userInput1) / userInput2);
}
function exp(userInput1, userInput2){
    console.log(parseInt(userInput1)**userInput2);
}
function algebra(userInput1){
    //ax+b=c
    var num1 = userInput1.substring(0,1);
    var num2 = userInput1.substring(3,4);
    var num3 = userInput1.substring(5);
    var x = (num3 - num2) / num1;
    console.log(x);
}