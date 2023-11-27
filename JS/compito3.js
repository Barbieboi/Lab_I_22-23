const assert = require('assert')

    function sub_set(a ,b){
        for(k in a){
            if(!(k in b)){ return false }
        }
        return true
    }

    function same_set(a,b){
        return sub_set(a, b) && sub_set(b, a)
    }

    function punto_fisso(f){
        if(f!= undefined){
        return function g (set) {
                let s1 = f(set)
                return same_set(s1 ,set)
            }
        }
    }
/*

function punto_fisso(f){
    if(f!= undefined){
    return function g (set) {
            let s1 = f(set)
            for(var k in set){
                if(!(k in s1)){ return  false }
            }
            return true
        }
    }
}
*/

/*

function partition_until(arr, depth){
    let res = []
    if(depth == 0 || arr.length == 1 ) {return res = [...arr]} 
    let mid = Math.floor(arr.length/2)


}
*/

function compare(a, b){
    if(a.anno > b.anno) return -1
    else if(a.anno < b.anno) return 1
    else if(a.mese > b.mese) return -1
    else if(a.mese < b.mese) return 1
    else if(a.giorno > b.giorno) return -1
    else if(a.giorno < b.giorno) return 1
    else return 0
}

function aggiorna(ordini){
        let n = 1
        for(i = 0; i < ordini.length ; i++){
            let minIndex = i
            for(j = i + 1; j < ordini.length ; j++){
                if(compare(ordini[j], ordini[i])){ minIndex = j }
            }
                ordini[minIndex].numero_ordine = n  
                n++
            
        }
}
