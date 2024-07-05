// let arr =[1,2,3,4,5,6,7];

// arr.forEach((val) =>{
//     console.log(val);
// })

//for a given array of number , print the squre of each value using the foreach loop.

// nums = [2,3,4,5,6]

// let arr =[2,3,4,5,6];

// arr.forEach((val) =>{
//     console.log(val **2);
// })
// 
//array filter method

let arr = [1,2,3,4,5,6,7,8,9];

let newArr = arr.filter((val) => {
    return val % 3 ==0; // logics 
})

console.log(newArr);