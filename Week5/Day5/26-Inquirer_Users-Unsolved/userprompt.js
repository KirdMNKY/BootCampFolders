// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");
console.log("\nStop! Who would cross the Bridge of Death must answer me these questions three, \'ere the other side he see.");

inquirer.prompt([{
    type: "input",
    message: "What is your name",
    name: "userName"
},
{
    type: "password",
    message: "What is your Quest?",
    name: "userPw"
},
{
    type: "list",
    message: "What is your favorite color?",
    choices: ["blue", "blue, no! Yell......."],
    name: "userColor"
},
{
    type: "checkbox",
    message: "What is the air speed velocity of a laden swallow",
    choices: ["What do you mean? European or African swallow?", "Wha? I don't knooooooooooooowww...."],
    name: "userQuest"
},
{
    type: "confirm",
    message: "Are you sure?",
    name: "userConfirm"
},
]).then(function(inquirerResponse){
    if(inquirerResponse.confirm){
        debugger;
        console.log("\nI am " + inquirerResponse.userName);
        if(inquirerResponse.userColor !== "blue, no! Yell......." && inquirerResponse.userQuest === "What do you mean? European or African swallow?"){
            console.log("Very well, you shall pass");
        }else {
            console.log("Fare thee well " + userName);
        }
    }
})