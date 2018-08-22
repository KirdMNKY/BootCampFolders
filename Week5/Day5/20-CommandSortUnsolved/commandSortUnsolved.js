// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

// var fs = require("fs");

// fs.readFile("nums.txt", "utf8", function(err, data){
//     if(err){
//         return console.log(err);
//     }
//     var nums = data.split(",");

//     for(var j = 0; j < nums.length; j++){
//         for(var h = 1; h < nums.length; h++){
//             if(nums[h].trim() > nums[j].trim() ){
//                 var temp = nums[j].trim();
//                 nums[j] = nums[h].trim();
//                 nums[h] = temp;
//             }
//         }
//     }
//     console.log(nums);
// });

//Solution

var nodeArgs = process.argv;
var numArray = [];
for(var i = 2; i < nodeArgs.length; i++){
    numArray.push(parseFloat(nodeArgs[i]));
}

console.log(numArray.sort(sortFunc));

function sortFunc(a,b){
    // -1 => a comes before b
    // 0 => they are the same
    // 1 => a comes after b
    return a - b;
}