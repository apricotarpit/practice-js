let myDate =new Date()

// console.log(myDate.toString());

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// let createdDate= new Date(2023,3,23)

// let createdDate= new Date("2023-02-26")

// console.log(createdDate.toDateString());

let mytimestamp=Date.now();

// console.log(mytimestamp);
// console.log(Math.floor(Date.now()/1000));
let newdate = new Date();
console.log(newdate);

newdate.toLocaleString(
    'default',{
        weekday:"long"
    }
)

