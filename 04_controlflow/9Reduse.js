const newnums = [1, 2, 3, 4]

const mytotal=newnums.reduce((acc,curr_val)=>{
    console.log(`accumulator value is: ${acc} & current value is: ${curr_val}`);
    
    return acc+curr_val
},0) // intial value.

const Mytotal=newnums.reduce((acc,curr) =>(acc+curr),0)

// ye intial value se start krta h and then acc ko current value me add krta rhta h and last me final ans as a sum of array de deta h 
console.log(Mytotal);

const shoppingcart=[
    {
        itemName: "js course",
        Price : 2999
    },
    {
        itemprice: "pycourse",
        Price : 999
    },
    {
        itemName: "mobile course",
        Price : 4565   
    }
]

const sdf=shoppingcart.reduce((acc,item) => (acc+item.Price),0)

console.log(sdf);

