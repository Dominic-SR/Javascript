// const removeDuplicates =(arr) =>{
//	return [...new Set(arr)]
// }

// const removeDuplicates =(arr)=>{
// return arr.filter((item,index,self)=> self.indexOf(item) == index )
//}

const removeDuplocates = (arr) => {

arr.reduce((unique,item) => {
return unique.includes(item) ? unique : [...unique, item ]
},[])

}

let arr = [1,2,2,3,4,4,5]
console.log("--->",removeDuplicates(arr))
