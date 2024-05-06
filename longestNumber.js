function longestWord(sentence){
    const words = sentence.split(' ')
    
    let longestWord = ''
    let maxLength = 0

    words.forEach(word=>{

        if(word.length > maxLength){
            
            longestWord = word
            maxLength = word.length
        }
        
    })
    

    return longestWord
}
console.log(longestWord("The quick brown fox jumped over the lazy dog"))