const useremail=[]
// empty ko false and filled ko true mana jata h 

if(useremail){
    console.log("got user email");
}
else {
    console.log("dont have email");
    
}

// Falsy Values :-
// false , 0 , -0 ,bigint 0n ,"", null , undefined , NaN(not a Number)

// Truthy Values :-
// true, "0",'false', " "(1 space) , [],{}(empty object) , function(){} (empty function) , 

//for checking Array is empty 

// if(useremail.length===0){
//     console.log("Array is empty");
// }

// for checking object is empty 

// const emptyObj={}
// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
    
// 
// +++++++++++++Imprtant+++++++++++++
// false ==0
// true
// false==''
// true
// 0==''
// true]

// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1=10?? 14
// val1 = null ?? 13
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15
// console.log(val1);

// Ternary Operator
// condition ? true: false;

const iceprice=100;
(iceprice>= 80 )? console.log("dont buy") : console.log("we will buy");

