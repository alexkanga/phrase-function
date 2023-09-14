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

function encadrer(chaine) {
    const voyelle = "aeiouy";
    const consonne = "bcdfghjklmnpqrstvwxz";

    let tableau = [];
    for (let i = 1; i < chaine.length-1; i++) {
        let isConsonne = consonne.includes(chaine[i].toLowerCase());
        let isPrevIsVoyelle = voyelle.includes(chaine[i-1].toLowerCase());
        let isNextIsVoyelle = voyelle.includes(chaine[i+1].toLowerCase());


        if(isConsonne && isPrevIsVoyelle && isNextIsVoyelle) {
            tableau.push(chaine[i-1]+chaine[i]+chaine[i+1]);
        }
    }
    return tableau
}


console.log(encadrer("salut famille"));

console.log(countWords("je suis alle au marche", 4));
console.log(countWords2("le hosting en javascript est le fait de remonter les variables à la compilation","le"));