// Singleton
// when we use constructor for making objects then singleton makes

// object literals
// objet me key values ke pair me input hota h 
// keys yha pe by default string me hoti h  toh unko acces ke liye unko "" me likha padeg

const mysym=Symbol("key1")

const JSuser={
    name: "hitesh",
    age: 16,
    [mysym]:"mykey1",
    location : "jaipur",
    isloggedin: false,
    lastlogindays:["monday","saturday"],
    "email": "dkjfhdjd"

}

    console.log(JSuser.location);
    console.log(JSuser["location"]);

    console.log(JSuser.email);
    console.log(JSuser["email"]);
    console.log(JSuser[mysym]);
    console.log(typeof mysym);
    
    
// abhi mysym ka datatype =>string de rha h 
// toh usko as a symbol ke liye hume uske key ko [] me rakhna padega
    
JSuser.email="jddfaipir.com"

// object ko freeze krna h => uske baad uski value change na ho
// Object.freeze(JSuser)
console.log(JSuser["email"]);
JSuser.email= "arpit@gmail.com"
console.log(JSuser["email"]);

JSuser.greeting=function(){
    console.log("Hello JS User");
}
console.log(JSuser.greeting());

JSuser.greeting2=function(){
    console.log(`Hello JS user,${this.name}`);
    
}
console.log(JSuser.greeting2());

