// For 

for(let idx=0;idx<=10;idx++){
    const element=idx;
    if(element==5){
        // console.log(`5 is best number`);
        
    }
    // console.log(element);   
}
for(let i=1;i<=10;i++){
    // console.log(`outer loop value: ${i}`);

    
    for(let j=1;j<=10;j++){
        // console.log(`inner loop value: ${j} and inner value is ${i}`);
        // console.log(i + '*' + j+ '=' + i*j);
        
    }
}
let myarray=["flash","batman","superman"]

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}

// Break and Continue;
// for (let index = 0; index < 20; index++) {
//     if(index===5){
//         console.log('Dectected 5');
//         break;
//     }
//     console.log(`value of i is ${index}`);
    
    
// }
for (let index = 0; index < 20; index++) {
    if(index===5){
        console.log('Dectected 5');
        continue;
    }
    console.log(`value of i is ${index}`);
    
    
}

