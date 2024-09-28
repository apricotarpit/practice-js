const marvelHero=["thor","Ironman","spiderman"]
const dcheros=["superman","flash","batman"]

// marvelHero.push(dcheros)
// console.log(marvelHero);
// console.log(marvelHero[3][2]);

const allhero=marvelHero.concat(dcheros);
console.log(allhero);

// Spreding the array 
const allnewHero=[...marvelHero,...dcheros]
console.log(allnewHero);

const otherarray= [1,2,3,[4,5,6],[7,8,[9,12]]];

const newotherarray=otherarray.flat(Infinity)
console.log(newotherarray)

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array({name: "hitesh"})); // intersting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));


