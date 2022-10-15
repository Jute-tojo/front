console.log("------------------SEMBLABLE------------------");
tab = [0, 3, 4, 1, 0, 0, 2, 2, 4];
exist = [];
for (i = 0; i < tab.length; i++){
    if (!exist.includes(tab[i])) {
        count = 1;
        for (j = i + 1; j < tab.length; j++){
            if (tab[i] == tab[j]) {
                count++;
            }
        }
        console.log(tab[i] + " se repete " + count + " fois.");
        exist.push(tab[i]);
    }    
}