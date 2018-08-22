var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];
var animal;
for(var i = 0; i < myFarm.length; i++){
    animal = myFarm[i];
    if(animal[0] === "c" || animal[0] === "o"){
        alert(animal + " Starts with 'c' or 'o'!");
    }
}