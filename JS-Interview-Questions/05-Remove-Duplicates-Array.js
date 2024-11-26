const removeDuplicates =(arr) =>{
	return [...new Set(arr)]
}

let arr = [1,2,2,3,4,4,5]
console.log("--->",removeDuplicates(arr))
