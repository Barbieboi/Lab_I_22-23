let A={uva: 1, mela:5, cachi:1, fichi:1, pere:1}

let arr = [ 10, 20, 30 ,40 ,50, 60 ,70 ]

/*
    //INDICI
    for(var k in A){
        console.log(k)
    }

    
    uva
    mela 
    cachi
    fichi
    pere 
    

    //SE ACCEDI CON L'INDICE HAI IL CONTENUTO
    for(var k in A){
        console.log(A[k])
    }

    
    1
    1
    1
    1
    1
    

    //INDICI
    for(var k in arr){
        console.log(k)
    }

    
    0    
    1    
    2    
    3    
    4    
    5    
    6 
    

    //CONTENUTO
    //NON LO PUOI USARE CON GLI OGGETTI, NON SONO ITERABILI 
    for(var k of arr){
        console.log(k)
    }

    10   
    20   
    30   
    40   
    50   
    60   
    70 
    */

//ESERCIZIO 2 - Funzione che inserisce un elemento in un insieme
function inserisci(A,el){
A[el]=1
return A
}
//ESERCIZIO 3 - Funzione che elimina un elemento dall'insieme
function rimuovi(A,el){
delete A[el]
return A
}

//ESERCIZIO 4 - Funzione che prende come parametri due insiemi a e b, 
//e controlla se l'insieme a è sottoinsieme di b
function subset(a,b){
for (let el in a) if (!(el in b)) return false
return true
}

//=========================

//ESERCIZIO 5 - Funzione che controlla se due insiemi sono identici
function uguale(a,b){
return subset(a,b) && subset(b,a)
}

//ESERCIZIO 6 - Funzione che restituisce l'intersezione di 2 insiemi
function intersezione(a,b){
c={c }
for (let e in a) if (e in b) c[e]=1
return c
}

//ESERCIZIO 7 - Funzione che restituisce l'unione di 2 insiemi
function unione(a,b){
c={}
for (let e in a) c[e]=1
for (let e in b) c[e]=1
return c
}

//ESERCIZIO 8 - Similarità di Jaccard J(A,B) = |A ^ B| / | A U B |
function jaccard(a,b){
return quanti(intersezione(a,b))/quanti(unione(a,b))
}

function quanti(x){
let tot=0
for (let e in x) tot++
return tot
}


//=== Mostro di fine livello
// Multi-insiemi (a.k.a. insiemi con cardinalità degli elementi)
//-> Inserimento multiset (++)

//Versione 1
function insert_multi_set(a, el, n){
    a[el] = n
    return a
}


//Versione 2
function insert_multi_set_v2(a, el){
    for(var k in el){
        if(a[k]>0){a[k] += el[k]}
        else a[k] = el[k]
    }
    return a
}



// Unione -> Max cardinalità elemento tra i 2 insiemi

function join_multi_set(a,b){
    let res = {}
    for(var k in a){
        if(k in b){ a[k]>b[k]?res[k]=a[k]:res[k]=b[k]} 
        else res[k] = a[k]
    }
    for(var k in b){
        if(k in a){b[k]>a[k]?res[k]=b[k]:res[k]=a[k]}
        else res[k] = b[k]
    }
    return res
}


// Intersezione -> Min cardinalità elemento tra i 2 insiemi

function instersection_multi_set(a, b){
    let res = {}
    for(var k in a){
        if(k in b){ a[k]<b[k]?res[k]=a[k]:res[k]=b[k] }
    }
    return res
}


// ESERCIZIO 9 - Jaccard per multi-insiemi
function cardinality_multi_set(a){
let res = 0
for(var k in a){
    let sum = 0
    while( sum <= a[k]){ sum++ }
    res += sum
}
return res
}

function jaccard_multi_set(a, b){
    return cardinality_multi_set(instersection_multi_set(a, b))/cardinality_multi_set(join_multi_set(a,b))
}

// ESERCIZIO 10 - Funzione che prende due stringhe che rappresentano un testo (parole separate da spazi) 
//come parametro e restituisce la similarità dei due testi, calcolata come Jaccard tra i rispettivi multi-insiemi


function comparison(s1 ,s2){
    let a = {} , b = {}, el = {}
    for(i = 0 ; i < s1.length ; i++ ){
        el = {}
        if(s1[i]!=" "){
            el[s1[i]] = 1
            insert_multi_set_v2(a, el)}
    }
    for(i = 0 ; i < s2.length ; i++ ){
        el = {}
        if(s2[i]!=" "){
            el[s2[i]] = 1
            insert_multi_set_v2(b, el)}
    }

    return jaccard_multi_set(a, b)

}
