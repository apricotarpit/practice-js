// Object creation by construetor its a singleton object 
// const tinderuser=new Object();

const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="samay"
tinderuser.userloggedin=false

// console.log(tinderuser);
const regularuser={
    email: " somegmail.com",
    fullname:{
        userfullname:{
            firstname:"aditya",
            lastname:"kachve"
        }
    }
}
// console.log(regularuser);
// console.log(regularuser.email);
// console.log(regularuser.fullname.userfullname.firstname);
// console.log(regularuser.userfullname.firstname);

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)

//this emptty object shows that it is always comes in targetd object

// Spreding Concept
const obj3={...obj1,...obj2}

console.log(obj3);

//array of objects
const user=[
    {
        id:"176hduh",
        email:"hash@gmail.com"
    },
    {
        id:"176hduh",
        email:"hash@gmail.com"
    },
    {
        id:"176hduh",
        email:"hash@gmail.com"
    }
]

console.log(user[1].email);
console.log(tinderuser);

console.log(Object.keys(tinderuser)); // this stores the keys in array so it is very imp. to iterate over the keys of any Object 
console.log(Object.values(tinderuser));

console.log(Object.entries(tinderuser));

// to check whether this atributes are present or not
console.log(tinderuser.hasOwnProperty('userloggedin'));


