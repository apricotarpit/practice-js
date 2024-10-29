class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
     static createId(){
        return "123";
    }
}
// when we are not giving the acess of any method or something => 'static' keyword
const arpit =new User("Arpit")
console.log(arpit.createId());
