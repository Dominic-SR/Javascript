const findLongestWord = (sentence) =>{
    // split the sentence use the delimeter
    const words = sentence.split(' ');

    // track longest word
    
    let longestWord = ''
   
    // For of method
    // for(const word of words){
    //     if(word.length > longestWord.length){
    //         longestWord = word;
    //     }
    // } 

    // For Loop method
    for(let word = 0; words.length - 1 >= word; word++){
        if(words[word].length > longestWord.length){
            longestWord = words[word]
        } 
    }

    return longestWord;

}

let sentence = "Find longest words";
console.log("---->",findLongestWord(sentence));