// for of loop 

const arr=[1,2,3,4,5]

for (const ele of arr) { //ye JS wla object nhi h; 
    console.log(ele);   
}
const greetings="hello worlsd";
for (const greet of greetings) {
    // console.log(greet);    
}

//Maps
// =>it remember order of insertion , no duplicates
const map=new Map()
map.set('IN',"india")
map.set('USA',"america")
map.set('Fr',"france")

console.log(map);

for (const key of map) {
    console.log(key);
    
}
//for printing key value pair seperately
for (const [key,value] of map) {
   // console.log(value);
    
}

// const myobject={
//     'game1':'NFS',
//     'game2': "spiderman"
// }

// for (const [key,value] of myobject) {
//     console.log(key,value);
    
// }

// Objects are not iterable by the For of Objects;

const myobject={
    js: "javascript",
    cpp: "cPP",
    rb: "ruby",
    swift : "swift by apple"
}

for (const key in myobject) {
   console.log(`key value is ${key} and value od key is${myobject[key]}`);
}

// for in loop on the Array;

const prog=['js','cpp','rb','py']

for (const key in prog) {
//    console.log(prog[key]);
   
}

// Map are not iteranle by for in loop;


//For each Loop;
const coding =['js','ruby','java','python','cpp']

coding.forEach(function (item) {
    // console.log(item);
    
})
// for each loop ek function leta h aur fir hum define krte h ki wo func kya karega ;

coding.forEach( (val)=> { //arrow function
    // console.log(val);  
})

function printme(item){
    console.log(item);
}

// passing func. in the foreach loop
coding.forEach(printme)

coding.forEach( (item,index,arr)=> {
    console.log(item,index,arr);
    
})

//for each has 3 parameter  item ,index,whole array

const mycoding=[
    {
        name:"javascript",
        filename:"js"
    },
    {
        name: "CPP",
        filename: "cpp"
    },
    {
        name: "python",
        filename: "py"
    }
]

mycoding.forEach( (item)=>{
    console.log(item.filename);
    
})