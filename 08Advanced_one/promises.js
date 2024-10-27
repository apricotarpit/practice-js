//  future promises => job queue me lg jate h aur fir baad me complte ho jate h 

// 2types of work of promises=> 1.Creation 2. Consumption


 const promiseone= new Promise(function(resolve,reject){
    // Do an Async task
    // DB calls ,Cryptography,network
    setTimeout(() => {
        console.log("async task is complete");
        resolve() // for connecting the promise resolve
    }, 1000);
 })
//then is for resolvee(tast completion)
 promiseone.then(function(){
    console.log("promise consumed");
    
 })

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2 is complete");
        resolve() 
    }, 1000);
 }).then(function(){
    console.log("Async 2 resolved");
    
 })

//  taking data that are coming from DB, user
const promisthree=new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({user:"Chai",email:"sdfhd@gmail.com"})
    }, 1000);
})

promisthree.then(function(user){
    console.log(user);
    
})

const promisefour=new Promise(function(resolve,reject){
   setTimeout(function(){
    let error=false;
    if(error===false){
        resolve({username:"Arpit",passward:"1234"})
    }
    else{
        reject("ERROR: somthing is went wrong")
    }
   },1000)
})

// values leni h toh => then
// error ke liye catch()
promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{ //yha chaining hui h chaning me upr ke func. se hi value extract kr rhe hote h 
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{console.log("promiised is either resolved or rejected")}
)

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
// async directly error ko handle nhi kr skte h 
async function consumePromiseFive(){
    try {
        const response=await promisefive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
// we are using the try & catch block for handling the error in promises;
consumePromiseFive()



// async function getALLusers(){
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);
// // jo chize time leti h response me unpr await lgae h 
//    } catch (error) {
//         console.log("ERROR:" ,error);
//    }
    
// }
// getALLusers()


// Same by then and catch method
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{ 
    console.log(error);
    
})