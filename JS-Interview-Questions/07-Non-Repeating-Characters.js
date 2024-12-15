const firstNonRepeatingCharacters=(str)=>{
    const repeatingChar = []
      for(const char of str){
	if(repeatingChar[char]){
	  repeatingChar[char]+=1;
	}else{
	  repeatingChar[char]=1;
	}
      }

      for(const char of str){
	if(repeatingChar[char] === 1){
     return char;
        }
	}
return null
}
let result = firstNonRepeatingCharacters("ssssetttt")
console.log(result);
