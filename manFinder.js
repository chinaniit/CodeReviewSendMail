const manConfig = require("./man.config.json");

let num1 = randomOne();
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
    return getRandomInt(0, manConfig.length);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    finder: manConfig[num1],
    checker: manConfig[num2]
}