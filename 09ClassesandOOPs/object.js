function mulby5(num){
    return num*5;
}
mulby5.power=2
console.log(mulby5(5));
console.log(mulby5.power);
console.log(mulby5.prototype);

// In JS all the thing is Object even a function also 
// JS is prototypical Language

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const chai = new createUser("chai", 25)
const tea = createUser("tea", 250)

chai.printMe()

// prototype is used for making the new methods