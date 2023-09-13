function countWords(phrase,nombre) {
    if(typeof phrase === 'string'){
        wordArray=[];
        arr = phrase.split(' ');
        for(let i=0; i<arr.length; i++) {

            if(typeof arr[i] === 'string' && arr[i].length === nombre) {
                wordArray.push(arr[i]);
            }

           
           
        }
        if(Array.isArray(wordArray) && !wordArray.length ){
            return "Aucun mot dans la phrase a une taille correspondant au nombre passé en paramètre"
        }
        return wordArray;    
    }else {
        return "veuillez revoir vos parametres"
    }
   
}

function countWords2(phrase,word) {
    if(typeof phrase === 'string' && typeof word === 'string'){
        wordArray=[];
        arr = phrase.split(' ');
        for(let i=0; i<arr.length; i++) {

            if(typeof arr[i] === 'string' && arr[i].includes(word)) {
                wordArray.push(arr[i]);
            }

           
           
        }
        if(Array.isArray(wordArray) && !wordArray.length ){
            return "Le mot passé en paramètre n'existe pas dans la phrase"
        }
        return wordArray.length;    
    }else {
        return "veuillez revoir vos parametres"
    }
   
}

console.log(countWords("je suis alle au marche", 4));
console.log(countWords2("le hosting en javascript est le fait de remonter les variables à la compilation","le"));