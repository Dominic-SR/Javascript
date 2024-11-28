// using Set()
// const removeDuplicates =(arr) =>{
//	return [...new Set(arr)]
// }

// using filter and indexOf
// const removeDuplicates =(arr)=>{
// return arr.filter((item,index,self)=> self.indexOf(item) == index )
//}

// using reduce and included
// const removeDuplicates =(arr)=>{
// return arr.reduce((unique,item) => // {
// return unique.includes(item) ? uniq// ue : [...unique, item ]},[])
// }

// using for and includes


let arr = [1,2,2,3,4,4,5]
console.log("--->",removeDuplicates(arr))

