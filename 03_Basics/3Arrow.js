const user={
    username: "hitesh",
    price: 444,
    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        // talking about the current context of that object or something
    }
}
// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()

// console.log(this);

// function chai(){
        // let username=" hitesh"
//     console.log(this.username);   
// }
// chai()

// this method is not used in the function

const chai = () => {
        let username=" hitesh"
    console.log(this);   
}
chai()

//Arow Function () =>{}
    // ans this is known as explicit function(return)
const addtwo =(num1,num2) =>{
    return num1+num2
}

// Implicit return => we dont use curli braces for single output and also we dont use the return output

// const add =(num1,num2) => (num1+num2)

// object output
const add =(num1,num2) => ({username : "hitesh"})
console.log(addtwo(4,6));
console.log(add(6,4));

