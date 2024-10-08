// const coding =['js','ruby','java','python','cpp']

// const values=coding.forEach((item)=>{
//     console.log(item);
    
// })
//  foreach don't return values; 
// console.log(values);

const nums=[1,2,3,4,5,6,7,8,9,10]

// filter return the values and it return the value when the conditon is true.
// const newnums=nums.filter((item)=> {
//     return item>4
// })

// yha pr {} lgane pr scope change ho jata h toh hume return keyword use krna hi padega otherwise empty dega

// by using foreach method
const newnums=[]
nums.forEach((item)=>{
    if(item>4){
        newnums.push(item)
    }
})
console.log(newnums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbooks=books.filter((bk)=> bk.genre==='History')

  const userbooks2=books.filter((bk)=> {
    
    return bk.publish>=2000 && bk.genre==='Science'

  })
  console.log(userbooks);
  console.log(userbooks2);
  