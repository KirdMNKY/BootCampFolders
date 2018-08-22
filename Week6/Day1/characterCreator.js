var inquirer = require("inquirer");

inquirer.prompt([{
        type: "input",
        name: "charName",
        message: "Enter Your Character Name:",
    },
    {
        type: "list",
        name: "charProf",
        choices: ["Paladin", "Ranger", "Fighter", "Wizard", "Rogue"],
    },
    {
        type: "confirm",
        name: "charGender",
        message: "Are you Male?"
    },
    {
        type: "input",
        name: "charAge",
        message: "Enter your character's age:"
    },
    {
        type: "input",
        name: "charStr",
        message: "Enter your Strength:"
    },
    {
        type: "input",
        name: "charHP",
        message: "Enter your Hit Point value:"
    }
]).then(function(inquirerResponse){
   //push to an array and handle them from there
    var userChar = new Character(inquirerResponse.charName, inquirerResponse.charProf, inquirerResponse.charGender, inquirerResponse.charAge, inquirerResponse.charStr, inquirerResponse.charHP);
   
})

function Character(charName, prof, gender, age, str, hitPoints){
    this.Name = charName;
    this.Profession = prof;
    this.Gender = gender;
    this.Age = age;
    this.Strength = str;
    this.HP = hitPoints;
    this.printStats = function printStats(){
        console.log("\n===== Character Sheet =====\n");
        console.log("Name: " + this.Name);
        console.log("Profession: " + this.Profession);
        console.log("Gender: " + this.Gender);
        console.log("Age: " + this.Age);
        console.log("Strength: " + this.Strength);
        console.log("Hit Points: " + this.HP);
        console.log("===========================");
    }
    this.isAlive = function isAlive(){
        if(this.HP > 0){
            console.log(this.Name + " is alive!");
        }else{
            console.log(this.Name + " has passed from this life...");
        }
    }
    this.attack = function attack(enemy){
        enemy.HP -= this.Strength;
        console.log(this.Name + "'s opponent " + enemy.Name +" now has " + enemy.HP + "HP.");
    }
    this.levelUp = function levelUp(){
        this.Age++;
        this.Strength += 5;
        this.HP += 25;
    }
}

// while(char.isAlive() && char2.isAlive()){
//     char.attack(char2);
//     char2.attack(char);
//     char.printStats();
//     char2.printStats();
// }

// if(char.isAlive()){
//     char.levelUp();
//     char.printStats();
// }
// if(char2.isAlive()){
//     char2.levelUp();
//     char2.printStats();
// }


// var Drizzt = new Character("Drizzt", "Ranger", "Male", 124, 18, 100);

// var Bruenor = new Character("Bruenor", "Fighter", "Male", 250, 20, 150);

// Drizzt.printStats();

// Bruenor.printStats();

// Drizzt.levelUp();
// Drizzt.printStats();
// Drizzt.isAlive();

// Drizzt.attack(Bruenor);
// Bruenor.attack(Drizzt);
// Drizzt.attack(Bruenor);
// Bruenor.attack(Drizzt);