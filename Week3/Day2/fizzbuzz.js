// for(var i = 1; i <= 100; i++){
//     if(i%3 === 0 && i%5 === 0){ //because console always adds a new line                                                                                                                                                                                                                                                                              
//         console.log("FizzBuzz");
//     }
//     else if(i%3 === 0){
//         console.log("Fizz")
//     }
//     else if(i%5 === 0){
//         console.log("Buzz");
//     }
//     else{
//         console.log(i);
//     }
// }




//Prime

// var isPrime = false;

// for(var i = 3; i <= 20; i++){
//     for(var j = i-1; j <= 2; j--){
//         if(Number.isInteger(i/j)){
//             isPrime = false;
//         }
//         else {
//             isPrime = true;
//             console.log(i);
//         }
//     }
// }

//solution
for(var i = 1; i <= 100; i++){
    if(checkPrime(i)){
        console.log("Prime: " + i);
    }
    else {
        console.log("Composite: " + i);
    }
}

function checkPrime(i){
    for(var j = 2; j <= (i/2)+1; j++){
        if(i%j === 0){
            //console.log(j, i/j);
            return false;
        }
        else {
            return true;
        }
    }
}