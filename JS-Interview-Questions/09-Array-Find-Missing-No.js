// Example 1:

const findMissingNoInArray=(arr)=>{
 const n = arr.length + 1;

 //Sum of number from 1 to N
 const totalSum = (n * (n+1)/2)

 //Sum of num in array
 const arrNum = arr.reduce((acc,num)=> acc + num,0)

 return totalSum - arrNum //Missing Number
}


console.log("---->",findMissingNoInArray([1,2,4]))
