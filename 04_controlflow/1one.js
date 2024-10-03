// IF

// const temp=41;
// if (temp===41) {
//     console.log("temp is less than 41");
// }
// else console.log(" temp is greater than 50");

// console.log("executed");

// relational operator
// < , > , <= ,>= ,== , != ,===( this op. is check value and type of data both)

// const balance =1000;

// if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else {
//     console.log("greater than 1000");
// }

const userloggedin=true
const debitcard=true
const loogedinfromgoogle=false;
const loogedinfromemail =true;
if(userloggedin && debitcard){
    console.log("allow to but course");
    
}
if( loogedinfromemail || loogedinfromgoogle){
    console.log("user loggedin");
    
}