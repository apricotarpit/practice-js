console.log("h");
console.log("i");


function saymyname(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
    console.log("t");
    console.log("s");
}

// saymyname -> this name is for Reference and ()=> is for execution

// function add(num1,num2){  //Parameters
//     console.log(num1+num2);
// }

function add(num1,num2){  //Parameters
    let result = num1+num2;
    return result
    console.log("fjkj"); // return ke baad kux bhi execute nhi hota h ;
}


const ans=add(2,'a')  // Arguments
add(3,null)

console.log(ans);

function loggedin(username="samay"){ //by default value to parameter
    if(username===undefined){
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}

console.log(loggedin("arpit"));
console.log(loggedin());

function calculateCartPrice(...num1){  //rest operator and spred operator
    return num1
}

console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200,34,400));


function calculateMRP(val1,val2,...num1){  //rest operator and spred operator
    return num1
}
console.log(calculateMRP(200,500,456,2000));

const user={
    username: "hitesh",
    price: 344
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is :${anyobject.price}`);   
}

handleobject(user)

handleobject({
    username:"sam",
    price : 455
})
// this will also execute the function as well as define Object

const newarray=[200,400,100,600]
function returnsecondvalue(myarray){
    return myarray[1]
}
console.log(returnsecondvalue(newarray));

console.log(returnsecondvalue([200,400,900,100]));
