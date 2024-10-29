const user={
    username:'hitesh',
    loginCount:8,
    sighnedIN:true,
    getUserDetails:function(){
        console.log("got user details");
        console.log(`Username: ${this.username}`);
    }
}
console.log(user.name);
console.log(user.getUserDetails());

// Constructor function
// this "new" keyword is used to makes new executional context 
// const promiseone= new Promise()
// const date = new Date()

function User(username,logincount,isloggedIN){
    this.username=username;
    this.loginCount=logincount;
    this.isloggedIN=isloggedIN;

     return this;  // no need for this return keyword
}
const userone=new User("hitesh",12,true);
const usertwo=new User("arpit",10,false);

console.log(userone);
console.log(usertwo);

// new keyword => then a new instance will be created of empty 
// a constructor func. is called when a new keyword is used
// constructor is giving the info. about this function