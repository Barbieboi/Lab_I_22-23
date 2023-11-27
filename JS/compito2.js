const prompt = require('prompt-sync')() ;
const assert = require('assert')


//EX 1
function filter_replace(f, g){
    return function(a){
        let b = []
        let c = []
        for(i = 0; i <a.length ; i++){
            if(g(a[i])){ b.push(a[i]) }
        }
        for(j = 0; j < b.length ; j++){
            c.push(f(b[j]))
        }
        return c
    }
}

//EX 2

function insert(A, el){
    A[el] = true
}

function prodotto(A , B){
    let res = {}
    for(k in A){
        for(p in B){
            let new_k = k.concat(p)
            insert(res , new_k)
        }
    }
    return res
}


//EX 3
function raggruppa_nascita(persone){
    let places = {}
    var k 
    for(i = 0; i < persone.length; i++){
        k = persone[i].luogonascita
        if(!(k in places)){places[k] = [] }
        places[k].push(persone[i])
    }
    return places
}

//EX 4
function modificaCorsi(corsi){
    if(corsi.length == 0){ return undefined }
    for(i = 0; i< corsi.length ; i++){
        if(corsi[i].numStudenti > 150 ){
            corsi[i].semestre = 1
        }
        else{ corsi[i].semestre = 2 }
    }
    return corsi
}

//EX 5

//DIOCA

function signed_to_integer(arr){
    if(arr.length < 2 ){ return undefined }
    let n = ''
    for(i = 0; i < arr.length ; i++){
        n += arr[i]
    }
    let res = parseInt(n, 2)
    if(arr[0] == 1){
    res = ~res
    res += 1    
    }
    return  res
}


let input = [1, 0, 1, 0, 1, 0]

console.log(signed_to_integer(input))