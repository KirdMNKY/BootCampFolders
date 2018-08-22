var inquirer = require("inquirer");

var programmingTeam = [];

TEAM_SIZE = 3;
membersEntered = 0;

function askQuestions(stop){
    inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "Enter the programmer's name:",
        },
        {
            type: "input",
            name: "userPosition",
            message: "Enter the programmer's position:",
        },
        {
            type: "input",
            name: "userAge",
            message: "Enter the programmer's age:",
        },
        {
            type: "input",
            name: "userLang",
            message: "Enter the programmer's favorite language:",
        },
    ]).then(function(IR){

            var programmer = new Programmer(IR.userName, IR.userPosition, IR.userAge, IR.userLang);
            // programmer.printInfo();
            programmingTeam.push(programmer);
            if(programmingTeam.length < TEAM_SIZE){
                askQuestions();
            }else{
                for(var i = 0; i < TEAM_SIZE; i++){
                    programmingTeam[i].printInfo();
                }
            }
            

    });
    
}
function Programmer(name, position, age, language){
    this.Name = name;
    this.Position = position;
    this.Age = age;
    this.Language = language;
    this.printInfo = function(){
        console.log(
            "\n======================================\n" +
            "Name: " + this.Name +
            "\nPosition: " + this.Position +
            "\nAge: " + this.Age +
            "\nLanguage: " + this.Language
        );
    }
}