const manConfig = require("./man.config.json");

let num1 = randomOne(0, manConfig.length);
let num2;
let isNoFindNum2 = true;
while(isNoFindNum2){
    num2 = randomOne();
    if(num2 != num1){
        isNoFindNum2 = false;
        break;
    }
}

function randomOne(){
    return random(0,4);
}

function random(min, max){
    return parseInt((Math.random() * (max - min)) + min);
}

module.exports = {
    finder: manConfig[num1],
    checker: manConfig[num2]
}