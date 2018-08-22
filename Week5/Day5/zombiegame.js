// INSTRUCTIONS: Build a command-line based zombie fighting game.
// =========================================================================================================

// In this game, you and a zombie will each be given a certain amount of health. (Perhaps: You 70, Zombie 15).

// For each round, you will be asked to guess a random number between 1 and 5.
// If your guess matches the random number of the Zombie -- you inflict a random amount of damage between 1 and 5.
// If you guess does not match the random number of the Zombie -- the Zombie inflicts a random amount of damage to you between 1 and 5.
// Each round the zombie is given a new random number and you must guess again.

// The game ends when you or the zombie gets to 0 health.

// Note: You should use the inquirer package to take in user commands.
// Major Warning: inquirer's prompt function is "asynchronous", which means that the majority of your game logic will need to be inside the .then() function for your prompt.

// ===========================================================================================================
var inquirer = require("inquirer");
var humanHealth = 70;
var zombieHealth = 15;
inquirerPrompt();
function inquirerPrompt(){
    var randomNumber = Math.floor(Math.random() * 5) + 1;
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Guess a number between 1 and 5"
        }
    ]).then(function(inquirerResponse){
        if(randomNumber === parseInt(inquirerResponse.guess)){
            zombieHealth -= Math.floor(Math.random() * 5) + 1;
            console.log("You guessed correctly! You've attacked the zombie");
            console.log("Zombie's Health: " + zombieHealth);
            console.log("Your Health: " + humanHealth);
        }
        else{
            humanHealth -= Math.floor(Math.random() * 5) + 1;
            console.log("You guessed wrong! You've been attacked");
            console.log("Zombie's Health: " + zombieHealth);
            console.log("Your Health: " + humanHealth);
        }

        if(humanHealth <= 0){
            console.log("You are dead. Enjoy being a zombie Bitch");
        }
        else if(zombieHealth <= 0){
            console.log("The zombie is dead. You fucked him up!");
        }
        else{
            inquirerPrompt();
        }
    })
}