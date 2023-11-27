const prompt = require('prompt-sync')() ;

/*

function prova(){
    console.log("Funzione")
}

let identità = {
    Nome : "Enrico" ,
    Cognome : "Barbin" ,
    Anni : 20
}

function crea(n, c , a){
    return(p = { Nome : n  , Cognome : c , Age : a })
}

for(var k in me){
    delete me[k]
}
*/

/*
let p1 = { x :0 , y :0 }
let p2 = { x :1 , y :1 }

function diff(p1 ,p2){
    return( Math.sqrt(Math.pow( p1.x - p2.x , 2 ) + Math.pow( p1.y - p2.y , 2 ) ))
}

function far(a , b){
    return diff(a , {x : 0 , y : 0})>diff(b , {x : 0 , y : 0})?a:b
}
*/

/*
let parole = []
let w = prompt("Iserire una parola: ")
while(w != "BASTA!" ){
    let i = 0
    let found = false
    while(!found && i < parole.length ){
    w == parole[i]?found = true:{}
    i++
    }
    !found?parole.push(w):{}
    w = prompt("Iserire una parola: ")
}


let list = { }

let p = prompt("Inserire parola: ")

while(p!="BASTA!"){
    !(p in list)?list[p] = true:{}
    p = prompt("Inserire parola: ")
}
*/


let arr = [ 1, 3 ,5 ,6, 7, 9 ]

let obj = { a: 2 , b: 4 , c: 6 }

let {a, b} = obj 

