// var dog = {
//     raining: true,
//     noise: "Woof!",
//     makeNoise: function(){
//         if(this.raining){
//             console.log(this.noise);
//         }
//     }
// }

// var cat = {
//     raining: false,
//     noise: "Meow!",
//     makeNoise: function(){
//         if(this.raining){
//             console.log(this.noise);
//         }
//     }
// }

function massHysteria(dog, cat){
    if(dog.raining && cat.raining){
        console.log("DOGS AND CATS LIFING TOGETHER! MASS HYSTERIA!");
    }
}

// dog.makeNoise();
// cats.raining = true;
// cats.makeNoise();



function Animal(isRaining, animalNoise){
    this.raining = isRaining,
    this.noise = animalNoise,
    this.makeNoise = function(){
        if(this.raining){
            console.log(this.noise);
        }
    }
}

var dog = new Animal(true, "Woof!");
var cat = new Animal(true, "Meow!");

massHysteria(dog, cat);