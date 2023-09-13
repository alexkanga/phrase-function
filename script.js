function countWords(phrase,nombre) {
    if(typeof phrase === 'string'){
        wordArray=[];
        arr = phrase.split(' ');
        for(let i=0; i<arr.length; i++) {

            if(typeof arr[i] === 'string'){
                wordArray.push(arr[i]);
            }
           
        }
        return wordArray;    
    }
   
}

console.log(countWords("je suis alle au marche", 2));