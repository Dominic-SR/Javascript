const orgString = 'Hello world'

const reverseStringFunction=(str)=>{
    let reversed = ''
    for(let i=str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}
let reverseString = reverseStringFunction(orgString)
console.log("---->", reverseString);
