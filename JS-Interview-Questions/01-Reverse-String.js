const orgString = 'Hello world'

// ## Using Traversing
const reverseStringFunction=(str)=>{
    let reversed = ''
    for(let i=str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
let reverseString = reverseStringFunction(orgString)
console.log("---->", reverseString);


// ## Usning Inbuild Function (Recursion)
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.slice(1)) + str.charAt(0);
}
console.log(reverseString("hello"));