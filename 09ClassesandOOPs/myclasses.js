
class User{
    constructor(Username,email,passward){
        this.Username=Username;
        this.email=email;
        this.passward=passward;
    }
    encryptpassward(){
        return `${this.passward}abc`
    }
    changeusername(){
        return `${this.Username.toUpperCase()}`
    }

}

const chai =new User("chai","chai@fb.com","123")
console.log(chai.encryptpassward());
console.log(chai.changeusername());

