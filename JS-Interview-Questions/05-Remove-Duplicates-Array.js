// using Set()
// const removeDuplicates =(arr) =>{
//	return [...new Set(arr)]
// }

// using filter and indexOf
// const removeDuplicates =(arr)=>{
// return arr.filter((item,index,self)=> self.indexOf(item) == index )
//}

// using reduce and included
const removeDuplicates =(arr)=>{
return arr.reduce((unique,item) => {
return unique.includes(item) ? unique : [...unique, item ]},[]
)}

// using for and includes

// const removeDuplicates = (arr) => {

// const getArr = []
//  for(let i=0; arr.length - 1 >= i; i++){

// 	if(!getArr.includes(arr[i])){
// 	   getArr.push(arr[i]);
// 	}
//   }
// return getArr;
// }

let arr = [1,2,2,3,4,4,5]
console.log("--->",removeDuplicates(arr))

