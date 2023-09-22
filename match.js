function match(chaine, pattern){
    let voyelles= "aeouiyh";
    const regex = /[a-z]/i;
    let chaineFormatted = [];
   
    if(chaine<pattern){
        return -1;
    }
    chaine.split('').map(
        character => {
            if( !character.match(regex)){
                console.log("n'est pas un caractère"); 
            }
            voyelles.includes(character) ? chaineFormatted.push("O") : chaineFormatted.push("X");
        }
    )

    // on utilise la longueur de pattern pour diviser chaine en groupe et on ajoute un delimiteur pour ajouter afin de creer un tableau de word
    //si pattern fait longueur deux on insere delimiteur dans le tableau a la longueur -1 index est length-1
    for (let index = pattern.length-1; index < chaineFormatted.length-1; index += pattern.length+1) {  
       chaineFormatted.splice(index+1, 0, '|');
       
    }

    let chaineFormattedPattern = chaineFormatted.join("").split('|');
    console.log(chaineFormattedPattern);

    //every pour comparer chaque groupe de longueur pattern dans notre chaine tableau formate
    console.log( 
        chaineFormattedPattern.every(
            element => element === pattern 
        )
    ); 


    
    console.log(chaineFormatted);
    // console.log(pattern);

    console.log(chaineFormatted.join(""));

}

match('bonbon', 'XOX');