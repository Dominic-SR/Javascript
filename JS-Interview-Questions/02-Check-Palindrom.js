const isPalindrome = (stringVal) =>{
    const reverseString = (str) =>{
        let reversed = ''
        for(let i = str.length - 1; i >= 0; i--){
            reversed += str[i]
        }
        return reversed;
    }

    const cleanStr = stringVal.toLowerCase();
    return cleanStr === reverseString(cleanStr);
}

console.log("--->",isPalindrome("rader"));