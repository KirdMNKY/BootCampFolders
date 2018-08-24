var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.
function myFunc(myString, Func2){
    console.log(myString);
    Func2();
}

myFunc("test", function(){
    console.log("this");
});

// Write a function that runs a function argument if
// its other argument is truthy.
function truFunc(truthy, Funky){
    if(truthy){
        Funky();
    }
}


// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!
function firstFunc(val, secondFunc){
    return function thirdFunc(){
        return secondFunc(val);
    }
}


// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?
fs.writeFile("log.txt", message, writeCallBack);

function writeCallBack(err){
    if(err){
        console.log(err);
    }else{
        console.log("File Saved.");
    }
}