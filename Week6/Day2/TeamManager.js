//Team Manager
//Going to try to make it Judo related
var inquirer = require("inquirer");
var TEAM_SIZE = 5;
var starters = [];
var subs = [];
var teamList = [];
var teamScore = 0;

    
function addPlayer(){
    if(starters.length + subs.length < TEAM_SIZE){
    console.log("\n            ========== New Player ==========\n");
    inquirer.prompt([
        {
            type: "input",
            name: "userName",
            message: "Enter the Player's Name:"
        },
        {
            type: "list",
            name: "userPos",
            message: "Choose the Player's Position:",
            choices: ["Light", "Middle", "Heavy", "Masters", "Open"]
        },
        {
            type: "input",
            name: "userOff",
            message: "Enter the Player's Offense Stat:",
            validate: function(value){
                if(!isNaN(value) && parseInt(value) > 0 && parseInt(value) <= 10){
                    return true;
                }
                return false;
            }
        },
        {
            type: "input",
            name: "userDef",
            message: "Enter the Player's Defense Stat:",
            validate: function(value){
                if(!isNaN(value) && parseInt(value) > 0 && parseInt(value) <= 10){
                    return true;
                }
                return false;
            }
        }
    ]).then(function(answers){
        var userPlayer = new Player(answers.userName, answers.userPos, answers.userOff, answers.userDef);
        if(starters.length < 3){
            starters.push(userPlayer); 
            teamList.push(userPlayer);
            console.log(userPlayer.Name + " added to the starters.");
        }else{
            subs.push(userPlayer);
            teamList.push(userPlayer);
            console.log(userPlayer.Name + " added to the subs.");
        }
        
        addPlayer();
    });

    }else{
        for(var i = 0; i < TEAM_SIZE; i++){
            teamList[i].printStats();
        }
    }  
     
}//End of addPlayer

//inital addPlayer call
addPlayer();

function playGame(){
    var numGames = 5;
    for(var i = 0; i < numGames; i++){
        var randOff = Math.floor(Math.random()*20)+1;
        var randDef = Math.floor(Math.random()*20)+1;
        var teamOff = 0;
        var teamDef = 0;
        //Calc teamOff and teamDef
        for(var team = 0; team < starters.length; team++){
            //sum of Off from starters
            teamOff += starters[i].Offense 
            //sum of Def from starters
            teamOff += starters[i].Defense 
        }
        //Show scores
        console.log("Team Offense: " + teamOff); 
        console.log("Random Offense: " + randOff); 
        console.log("Team Defense: " + teamDef); 
        console.log("Random Defense: " + randDef);     
        
        //Hajime!
        if(randOff < teamOff){
            console.log("Your team has scored an Ippon!!\n");
            //teamScore Updated
            teamScore++;
        }
        if(randDef > teamDef){
            console.log("The opposing team has scored and Ippon...\n");
            //teamScore Updated
            teamScore--;
        }

        //Sub-out
        inquirer.prompt([
            {
                type: "confirm",
                name: "userConfirm",
                message: "Would you like to make a substitution?"
            }
        ]);

        
    }
    if(teamScore > 0){
        console.log("Your Team Won!!");
    }else{
        console.log("You life to fight another day...");
    }
}

function subOut(){
    inquirer.prompt([
        {
            type: "rawlist",
            name: "subPlayer",
            message: "Who would you like to sub in?",
            choices: subs,
        }
    ]);
}




function Player(name, pos, off, def){
    this.Name = name;
    this.Position = pos;
    this.Offense = off;
    this.Defense = def;
    this.goodGame = function(){
        //coinflip
        var flip = Math.floor(Math.random()*2);
        if(flip === 1){
            this.Offense++;
        }else{
            this.Defense++;
        }
    };
    this.badGame = function(){
        //coinflip
        var flip = Math.floor(Math.random()*2);
        if(flip === 1){
            this.Offense--;
        }else{
            this.Defense--;
        }
    };
    this.printStats = function(){
        console.log(
            "========== Your Team ==========" +
            "\nName: " + this.Name +
            "\nPosition: " + this.Position +
            "\nOffense: " + this.Offense +
            "\nDefense: " + this.Defense + 
            "\n===============================\n"
        );
    }
}