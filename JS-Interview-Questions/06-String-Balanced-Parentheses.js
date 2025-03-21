const balanced = (str) =>{
 const stack = [];
 foreach(const char of str){
   if(char == '('){
	stack.push(char);
   }else if(char == ')'){
	if(stack.length == 0){
	return false
	}
	stack.pop()
   }else{
	console.log("")
 }
}
<<<<<<< HEAD
=======
return stack.length === 0;
}

console.log(balanced("()))"));
>>>>>>> 695c7c0 (test paranthises)
