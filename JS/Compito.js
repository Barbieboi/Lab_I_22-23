const prompt = require('prompt-sync')() ;

//EX 1
/*
Si scriva una funzione foo(a) che, dato un array di numeri a, restituisca un altro array
contenente due elementi:
il primo elemento contiene la media aritmetica dei numeri pari in a
il secondo elemento contiene la media aritmetica dei numeri dispari in a
Esempi:
foo([-21,30,2,99,101,101,2,76,22,1349]) restituisce [26.4,325.8]
foo([0,0,12,-66,9]) restituisce [-13.5,9]
*/ 

/*
function foo(a){
    let pari=0 , dispari=0 ,n_p=0, n_d=0
    for(i = 0 ; i < a.length; i++){
        if(a[i]%2 > 0 ){
            dispari =+ a[i]
            n_d++
        }
        else {
        pari += a[i]
        n_p++
        }
    }

    return (res = [ (pari/n_p) , (dispari/n_d) ])
}


console.log(foo([0,0,12,-66,9]))
*/

//EX 3
/*
Scrivere una funzione elimina(a,s) che, dati in input un array a di numeri e un numero s,
modifica a eliminando gli elementi in fondo ad a fino a che la somma degli elementi
eliminati non supera s. La funzione elimina(a,s) restituisce poi l'array a modificato.
Esempi:
elimina([6,20,3,5],10) restituisce [6]
elimina([10,20,30,40,50],10) restituisce [10,20,30,40] 
*/

/*
function elimina(a,s){
    let sum = 0 , i = a.length - 1
    while(sum < s && i >= 0 ){
        sum =+ a[i]
        a.pop()
        i--
    }

    return(a)
}

console.log(elimina([10,20,30,40,50],10))
*/

//EX 5
/*
Si scriva una funzione azzera(a,p) che prende in input un array a di stringhe e una
funzione p. La funzione p implementa un predicato, prendendo in input una stringa e
restituendo true o false. L'invocazione di azzera(a,p) sostituisce ogni elemento in a per
cui p(a)==true con "".
Esempi:
azzera(["pippo","pluto","paperino"], (s) => (s == "pippo")) restituisce
["","pluto","paperino"]
azzera(["b","abab","ab","a"], (s) => (s.length > 1)) restituisce ["b","","","a"]
*/

/*
function azzera(a , p ){
    for(i = 0 ; i < a.length ; i++){
        if(p(a[i])){ a[i] = "" }
    }
    return a
}
*/

//EX 7
/*
Scrivere una funzione calcola(a) che, dato un array di punti sul piano cartesiano 
(ciascuno del tipo { x: valX, y: valY }), determina il centroide di tali punti, 
ovvero il punto le cui coordinate sono date dalla media aritmetica 
delle coordinate di tutti i punti nell'array.
(Se a è vuoto, restituisce il punto con coordinate 0,0)
Esempi:
calcola([{x:2,y:3},{x:3,y:4},{x:7,y:5}]) restituisce {x:4,y:4}
calcola([{x:10,y:6},{x:20,y:-6}]) restituisce {x:15,y:0}
*/
/*
function calcola(a){
    if(a.length == 0){ return {x : 0, y: 0} }
    let sum_x = 0, sum_y = 0
    for(i = 0; i < a.length ; i++){
       sum_x += a[i].x
       sum_y += a[i].y
    } 
    return({ x: (sum_x/a.length) , y: (sum_y/a.length)  })
}
*/

//EX 9
/*
Scrivere una funzione sposta(p) che prende in input un oggetto p che rappresenta un
punto del piano cartesiano, ovvero del tipo {x: valX, y: valY }. La funzione sposta(p)
restituisce una funzione che prende due numeri n e m e restituisce il punto p con
coordinate aggiornate sommando n sull'asse x e m sull'asse y.
Esempi:
Se p è {x: 4,y:7} allora sposta(p)(2,1) restituisce {x:6,y:8}
Se p è {x: 4,y:7} allora sposta(p)(10,20) restituisce {x:14,y:27}
*/







