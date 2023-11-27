const prompt = require('prompt-sync')() ;

//array

function stampa_arr(a){
    for(i in a){
        console.log(a[i])
    }
}

let a = [8 ,3 , 4 ,90 ]
console.log("Stampa numero 1 : ")
stampa_arr(a)

for(i = 0; i < a.length ; i++ ){
    a[i] = 0
}

console.log("Stampa numero 2 : ")
stampa_arr(a)
