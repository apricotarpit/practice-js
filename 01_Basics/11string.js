 const name="hitesh"
 const repocount=50

 console.log(name + repocount +"djfsl"); //it is a old method to concatenate the string and numbr

//  string interpulation
// its like a placeholder 
 console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

 const gamename=new String('hitesh_hb_abc');

//  console.log(gamename[0]);
//  console.log(gamename.__proto__);

 console.log(gamename.charAt(4));
 console.log(gamename.indexOf('t'));
 
 const newstring=gamename.substring(0,4)
 console.log(newstring);
 
 const anotherstring=gamename.substring(-8,4)
 console.log(anotherstring);

 const newstringone="     hitesh    "
 console.log(newstringone);
 console.log(newstringone.trim()); // to remove the extra spaces in  string

//  trimStart() 
// trinmEnd()

const url="https://hitesh.com/hitesh%20chodhary"

console.log(url.replace('%20' ,'-'));
console.log(url.includes('hitesh'));

// converting string into Array:-

console.log(gamename.split('_', 5));



 
 