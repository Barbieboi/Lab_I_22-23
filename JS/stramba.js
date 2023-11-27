/*

Esercizio 1 - Stramba
Scrivere una funzione stramba che prenda in input un array a di stringhe, \
un predicato quando e un numero tot. 
La funzione deve restituire un nuovo array ottenuto da a ripetendo quanto segue per tot interazioni:
1. Sposta l’ultimo carattere di ciascuna stringa in cima alla stessa
2. Mantiene solo le stringhe che verificano il predicato quando.
Nota: La funzione non deve alterare nè l'array originale nè il suo contenuto.
Esempio stramba(["ciao","mamma","ci"],(x)=>(x[0]!="o"),3)
restituisce ["mmama","ic"]
*/ 



function stramba(a, quando, tot){
    var res  ;
    res = a.map((x) => x )
    for(i = 0 ; i < tot ; i++){
        let s_arr = res[i].split('')
        let tmp = s_arr[0]
        s_arr[0] = s_arr[s_arr.length - 1]
        s_arr[s_arr.length - 1] = tmp
        res[i] = s_arr.join('')
    }
    return res.filter(quando)
}


console.log(stramba(["ciao","mamma","ci"],(x)=>(x[0]!="o"),3)) ;