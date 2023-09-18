function splite(sentence,chaine) {
    let count = "";
    let count2 = 0;

    for (let i = 0; i < sentence.length; i++) {  
       count += sentence[i];
       let compteur = count.length-1;
       // console.log(count, chaine);
       console.log(compteur, count[compteur], chaine[compteur]);
      
       if(count[compteur]=== chaine[compteur]){
            console.log("yes meme position " + compteur );
            if (count === chaine) {
                
                count2++;
                if (count[compteur] === chaine[0]){
                    count = count[compteur];
                    console.log("meme mot but last letter is equal pos 0 and pos compteur is " + compteur );
                }else{
                    console.log("meme mot");
                    count = "";
                }

                
                //count = count[compteur] == chaine[0] ? count[compteur]: "";

            }
       }else if (count[compteur] === chaine[0]){
        console.log("no but same that position 0 and compteur position " + compteur );
        count = count[compteur];
       }else{
        count = "";
       }
        
    } 
    return `nombre de fois : ${count2}`
}
console.log(splite("la foi le elele verité leele", "ele"));
