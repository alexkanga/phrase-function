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

/**
 * 
 * Écrire une fonction qui prend en paramètre une chaîne de caractère , la fonction doit retourner la somme de tous les nombres inclus dans la chaîne.
Ex: somme("bo2jou5) => 7
Ex2: somme("bonjour") => 0
 */
function sommeNombreChaine(chaine) {
    let numberArray = [];
    let somme = 0;
    if (typeof chaine === 'string') {
        //test if parseint(chaine) return NaN
        

        chaineToArray = chaine.split('');
        for (let i = 0; i < chaineToArray.length; i++) {
            //parseint en base 10 , convertit le nombre chaine en nombre base decimale 10
            if (!isNaN(parseInt(chaineToArray[i]),10)) {
                numberArray.push(parseInt(chaineToArray[i], 10));
            }
           
        }
        //calcul de la somme a partir du tableau numberArray
        return somme = numberArray.reduce((acc, num) => acc + num);
        
    }else{
        return "Le paramètre passé n'est pas une chaine de caractère " + chaine
    }
   
}

//non terminé
function genSentence(tailleChaine){
    const voyelles = "aeiouy";
    const consonnes = "bcdfghjklmnpqrstvwxz";
    let chaineArray = [];
    if(tailleChaine>1){
        for(let i=0; i<tailleChaine; i=i+3) {
            chaineArray.push(consonnes[Math.floor(Math.random()*20)]);
            chaineArray.push(voyelles[Math.floor(Math.random()*6)]);
            chaineArray.push(voyelles[Math.floor(Math.random()*6)]);
        }
        return  chaineArray.slice(0, tailleChaine).join("");
        //return chaineArray.join("");

    }else{
        return "parametre taille chaine insuffisante pour génerer une chaine : " + tailleChaine
    }

    return "taille de la chaine = "+tailleChaine;

}


console.log(genSentence(8));

// console.log(parseInt("5b8", 10));
console.log(sommeNombreChaine("bonjour793"));
console.log(encadrer("salut famille"));

console.log(countWords("je suis alle au marche", 4));
console.log(countWords2("le hosting en javascript est le fait de remonter les variables à la compilation","le"));