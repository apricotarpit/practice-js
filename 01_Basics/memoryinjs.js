//  primitive => Stack
// stack me hume uss variable ki copy milti h 
// jo bhi changes ho rhe hote h wo copy o that variable me changes honge


//  Non Primitive =>Heap
//  Heap me hume uska refrence milta h that means real path hota h uska
// jo bhi changes kr rhe honge wo original value me changes ho rha hoga

let myname="djfdlj";

let anothername="ns,kz";
anothername="chaiorcode";
console.log(myname);
console.log(anothername);

let userone={
    emial:" abc@gmail.comm",
    num: 1145465

}
let usertwo=userone;
usertwo.emial="kdjfk";
console.log(userone.emial);
console.log(usertwo.emial);



