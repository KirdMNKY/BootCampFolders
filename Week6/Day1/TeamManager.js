//Team Manager
//Going to try to make it Judo related
var inquirer = require("inquirer");
var TEAM_SIZE = 5;
var teamList = [];

addPlayer();
    
    function addPlayer(){
        inquirer.prompt([
            {
                type: "input",
                name: "userName",
                message: "Enter the Player's Name:"
            },
            {
                type: "input",
                name: "userPos",
                message: "Enter the Player's Position:"
            },
            {
                type: "input",
                name: "userOff",
                message: "Enter the Player's Offense Stat:"
            },
            {
                type: "input",
                name: "userDef",
                message: "Enter the Player's Defense Stat:"
            }
        ]).then(function(answers){
            var userPlayer = new Player(answers.userName, answers.userPos, answers.userOff, answers.userDef);
            teamList.push(userPlayer); 
            if(teamList.length < TEAM_SIZE){
            addPlayer();
        }else{
            for(var i = 0; i < TEAM_SIZE; i++){
                teamList[i].printStats();
            }
        }

        });
        
    }

function playGame(){
    var numGames = 5;
    for(var i = 0; i < numGames; i++){
        var randOff = Math.floor(Math.random()*20)+1;
        var randDef = Math.floor(Math.random()*20)+1;
        
    }
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
            "\n============================\n"
        );
    }
}