class User{
    constructor(email,passward){
        this.email=email,
        this.passward=passward
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(Value){
        this._email=Value
    }
    get passward(){
        return this._passward.toUpperCase()
    }
    set passward(Value){
        this._passward=Value
    }
}

const hitesh=new User("hitesh@.ai","abc")
console.log(hitesh.passward);
console.log(hitesh.email);



