const countCharacterFunction = (str) =>{
    const counts ={}

    // for of loop method
    // for(let char of str){
    //     if(counts[char]){
    //         counts[char]++;
    //     }else{
    //         counts[char]=1;
    //     }
    // }

    // for loop method
    for(let char = 0; str.length -1 >= char; char++ ){
        console.log("ASAA",str[char]);
        if(counts[str[char]]){
            counts[str[char]]++;
        }else{
            counts[str[char]]=1;
        }
    }
    return counts
}

const inputString = "google";
const charectersCount = countCharacterFunction(inputString);
console.log("--->",charectersCount);