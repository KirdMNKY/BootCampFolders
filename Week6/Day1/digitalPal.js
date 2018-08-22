//Bonus: use userInput to play with pet(s) using inquierer

var inquirer = require("inquirer");
console.log("Enjoy your new Digital Pet™!\n");
var play = true;
var userPet = new DigitalPal();

inquirer.prompt([
    {
        type: "confirm",
        name: "checkPet",
        message: "Would you like to check on your Digital Pet™!"
    },
    {
        type: "list",
        name: "userAction",
        message: "What would and your pet like to do?",
        choices: ["Eat", "Sleep", "Play"]
    }

]).then(function(IR){
    if(IR.checkPet){
        switch(IR.userAction){
            case "Eat":
                userPet.feed();
                break;
            case "Sleep":
                userPet.sleep();
                break;
            case "Play":
                userPet.play();
                break;
            default:
                "You and your pet can not do that.";
                break;
        }
    }
});

function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function feed(){
        if(this.hungry){
            console.log("That was Yummmy!");
            this.hungry = false;
            this.sleepy = true;
        }else{
            console.log("No thanks! I'm full!");
        }
    };
    this.sleep = function sleep(){
        if(this.sleepy){
            console.log("Zzzzzz...");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }else{
            console.log("No way! I'm not tired!");
        }
    };
    this.play = function play(){
        if(this.bored){
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }else{
            console.log("Not right now. Later?");
        }
    };
    this.increaseAge = function increaseAge(){
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " days old!");
    }
}

// var dog = new DigitalPal();
// dog.outside = false;
// dog.bark = function bark(){
//     console.log("Woof! Woof!");
// };
// dog.goOutside = function goOutside(){
//     if(this.outside){
//         console.log("We're already outside though...");
//     }else{
//         console.log("Yay! I love the outdoors!");
//         this.outside = true;
//         this.bark();
//     }
// }
// dog.goInside = function goInside(){
//     if(this.outside){
//         console.log("Do we have to...? Fine...");
//         this.outside = false;
//     }else{
//         console.log("I'm already inside...");
//     }
// }

// var cat = new DigitalPal();
// cat.houseCondition = 100;
// cat.meow = function meow(){
//     console.log("Meow! Meow!");
// };
// cat.destroyFurniture = function destroyFurniture(){
    
//     if(this.houseCondition <= 0){
//         return;
//     }else{
//         this.houseCondition -= 10;
//         console.log("MUAHAHAHAHAHAHA!!! TAKE THAT FURNITURE!");
//         this.bored = false;
//         this.sleepy = true;
//     }
// };
// cat.buyNewFurniture = function buyNewFurniture(){
//     this.houseCondition += 50;
//     console.log("Are you sure about that...?");
// };

// dog.goOutside();