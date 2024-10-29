// to making a new method

let myheros=["thor","spiderman"]

let heropower={
    thor: "hammer",
    spiderman:"sling",

    getspiderman:function(){
        console.log(`spidy power id ${this.spiderman}`);
        
    } 
}

Object.prototype.Arpit=function(){
    console.log(`Arpit is present is present in all objects`);
    
}

myheros.Arpit()
heropower.Arpit()
heropower.getspiderman()


// func./method that are created in object is used by everyone
// func./method that are created for particluar part is only accesed by that portion only

Array.prototype.heyArpit=function(){
    console.log(`Arpit says hello`);
}
myheros.Arpit()
myheros.heyArpit()
heropower.Arpit()
// heropower.heyArpit()

// Inheritence

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
// 1st wla 2nd ki property inherit krega


let username="Chaiaurcode     "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}

username.truelength()
"hitesh".truelength()

// this=> current executional context