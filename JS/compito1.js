const prompt = require('prompt-sync')() ;
const assert = require('assert')

function media(arr, a ,b){
    let res = 0
    let n = 0
    if(a <= b && b < arr.length && arr.length > 0){
        for(i = 0 ; i < arr.length ;i++){
            if(a <= i && i <= b){
                res += arr[i]
                n++
            }
        }
    }
    else { return undefined }
    return (res/n)
}

function replace_first(arr , target ,replacement,max_rep ){
    if(max_rep == -1){ max_rep = +Infinity }
    let res = [], rep = 0, i = 0
    for(i = 0 ; i < arr.length  ; i++){
        if(arr[i] == target && rep < max_rep ){
            res.push(replacement)
            rep++
        }
        else{ res.push(arr[i]) }
    }
    return res
}

function convoluzione(arr , window_size){
    let res = []
    let c_i 
    for(i = 0; i < arr.length; i++){
        c_i = 0
        for(j = Math.max(0, i - window_size); j <= Math.min(arr.length - 1, i + window_size); j++ ){
            c_i += arr[j]
        }
    res.push(c_i)
    }
    return res
}

function map_senior(db){
    for(i = 0 ; i < db.length ; i++){
        db[i].eta >= 18?db[i].maggiorenne = true:db[i].maggiorenne = false
    }
    return db
}

function tunnel(convoy, max_height){
    var res = []
    if(typeof(convoy) == 'undefined' ){ return res }
    for(let i = 0; i < convoy.length ; i++){
        if(convoy[i].altezza < max_height){ 
            res.push(convoy[i]) 
        }
    }
    convoy.length = 0
    for(let j = 0 ; j < res.length ; j++){
        convoy.push(res[j])
    }
    return  res
}

/*
let input = [{'tipo': 'tir' , 'altezza' : 3.5 }, 
            { 'tipo': 'autocarro' , 'altezza' : 4  } ,
            {'tipo': 'auto' , 'altezza' : 1.50 } ,
            {'tipo' : 'pullman' , 'altezza': 4  } , 
            {'tipo': 'microcar', 'altezza': 1.50 }]

console.log(input)

let pippo = tunnel(input,4)

console.log('INPUT =', input, 'PIPPO =' , pippo )
assert.deepEqual(input, pippo)
*/

function applicaF(p,d){ 
    return function (a){
    let res = []
    for(let i = 0 ; i < a.length ; i++){
        i%2?res.push(d(a[i])):res.push(p(a[i]))
    }
    return res}
}

var f = (n) => n * 2 - 1
var p = (n) => n = 'pippo'



let res = applicaF(f, p)([20, 43 ,5 ,2, 6, 6, 7, 87 , 9])

console.log(res)