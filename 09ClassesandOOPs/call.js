function setusername(username){
    this.username=username
    console.log("called");
    
}

function createuser(username,email,passward){
    setusername.call(this,username) // yha pr this ka mtlb h ki mere wle this me changes krna h na ki aapko apne wale me 
    this.email=email
    this.passward=passward
}
const chai=new createuser("chai","cahai@fb.com","123")
console.log(chai);

// function ko function ke andr call krne ke liye .call is used
// function call toh hota h but uske variable ki value set nhi hoti (reference nhi hota)