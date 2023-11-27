const prompt = require("prompt-sync")() ;


//Dato un intero positivo n calcola e stampa la somma dei numeri dispari da 1 a n (con n compreso)
/*
let n = Number(prompt("Dammi n: "))
let somma = n
for(let i = 1;  i < n ; i++ ){
    if(i%2){
        somma += i ;
    }
}
console.log(somma)
*/

//Programma che legge numeri finche la loro somma non supera 101, poi stampare la somma ottenuta
/*
let sum = 0
while(sum <= 101){
    sum += Number(prompt("inserire numero: "))
}
console.log("somma:" , sum)
*/

//leggere intero e valutare se primo
/*
let n=Number(prompt("Inserire n:"))
let d = 2
while((n%d)) d++
console.log(n == d?0:1)
*/

/*
let primo = true
let start = Number(Date.now())
let i = 2
while(i <= n-1 && primo ){
    if(n%i == 0){ primo = false }
    i++
}
let end = Number(Date.now())

console.log(primo, end - start , "ms" )
*/

//Fattoriale
/*
let n = Number(prompt("iserire n: "))
let p = n - 1
let fact = n
for( ; p > 0 ; p--){
    fact *=  p ;
}
console.log(fact)
*/

//Asterischi 
//Stampare alla prima linea n asterischi, next line n-2, e cosi via
/*
let n = Number(prompt("Inserire n: "))
for(; n >= 1 ; n -= 2 ){
    let row = ' '
    for(let i = 0; i < n ; i++ ){
        row += '*'
    }
    console.log(row , '\n' )
}
*/

//Stampa selettiva
//Leggere e stampare se Positivo e pari/ negativo e preceduto da numero >= Terminare quando inserire 0
/*
let n = -Infinity
while(n!= 0){
    let prev = n
    n = Number(prompt("Inserisci: " ))
    if(n%2 == 0 && n > 0 ){
        console.log(n)}
    else if(n < 0 && prev >= n){
        console.log(n)}

}
*/

