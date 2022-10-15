//Trie croissant par séléction
console.log("------------------TRI CROISSANT------------------");
tab = [4, 0, 5, 9, -8];
console.log("tab");
console.log(tab);

for (i = 0; i < tab.length; i++){
        min = i;    
        for (j = i + 1; j < tab.length; j++){
            if (tab[j] < tab[min]) {
                min = j;
            }
        }
        tmp = tab[i];
        tab[i] = tab[min];
        tab[min] = tmp;
}

console.log("RESULTAT APRES TRI");
console.log(tab);