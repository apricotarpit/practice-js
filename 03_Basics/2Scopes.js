let a=20
const b=20
var c=30

// console.log(a);
// console.log(b);
// console.log(c);

// global scope ka perspective terminal me alag h and console me alag h 

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    
    two()
}
one()

if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);


// *******************************Intresting************************
function addone(num){
    return num+1
}
addone(5) // is type ke func ko hum phle bhi declare kr skte h bcoz yha pr sirf isko declare kr rhe h 

const addtwo=function(num){
    return num+2
}
addtwo(5) // is type ke func. ko iske phle declare nhi kr skte h bcoz ye a variable me iski value ko store kr rha h toh declaration call ke pj=hle honi chahiye
