
function seek(a, n){
   let i = 0
   while(i < a.length ){
      if(a[i] == n ){ return i }
      i++
   }
   return -1
}


function rec_binary_seek(a ,s, e ,k){
   if(a.length == 0){ return -1 } //Array vuoto
   if(a.length == 1 && a[s] == k){ return s } //Array unitario
   if(s > e ){ return -1 }
   let m = Math.floor((s+e)/2)
   if(a[m] == k){ return m }
   else if(a[m] > k ){ return rec_binary_seek(a, s, m - 1 , k) }
   else{ return rec_binary_seek(a, m + 1 , e , k) }
}

let input = [1, 3 ,4 ,7 ,9 ,11 ,13 ,17, 19, 21, 25, 27]
/*
let k = 23

console.log("Input" , input, "Elemento: ",  k ,"in posizione: ", rec_binary_seek(input, 0, input.length - 1, k))
*/


/*
Si scriva una funzione foo(a) che, dato un array di numeri a, restituisca un altro array contenente due elementi: 
il primo elemento contiene la media aritmetica dei numeri pari in a
il secondo elemento contiene la media aritmetica dei numeri dispari in a

Esempi:
foo([-21,30,2,99,101,101,2,76,22,1349]) restituisce [26.4,325.8]
foo([0,0,12,-66,9]) restituisce [-13.5,9]
*/


function foo(a){
   let res = [], n_p = 0,n_d = 0, p =0 , d = 0
   if(a.length == 0){ return res }
   for(let i = 0; i < a.length; i++){
      if(!(a[i]%2)){ 
         p += a[i]
         n_p++ 
      }
      else{
         d += a[i]
         n_d++  
      }
   }
   res.push(p/n_p)
   res.push(d/n_d)

   return res
}

/*
Scrivere una funzione elimina(a,s) che, dati in input un array a di numeri e un numero s, 
modifica a eliminando gli elementi in fondo ad a fino a che la somma degli elementi eliminati non supera s. 
Con il termine "in fondo" ci si riferisce al fatto che gli elementi vanno cancellati a partire dall'ultimo elemento dell'array,
procedendo a ritroso. La funzione elimina(a,s) restituisce poi l'array a modificato.

Esempi:
elimina([6,20,3,5],10) restituisce [6]
elimina([10,20,30,40,50],10) restituisce [10,20,30,40]
*/

function elimina(a ,s){
   let sum = 0
   while(sum < s && a.length > 0 ){
      sum += a[a.length - 1]
      a.pop()
   }
   return a
}

/*
Si scriva una funzione azzera(a,p) che prende in input un array a di stringhe e una funzione p. 
La funzione p implementa un predicato, prendendo in input una stringa e restituendo true o false. 
L'invocazione di azzera(a,p) sostituisce ogni elemento in a per cui p(a)==true con la stringa "".

Esempi:
azzera(["pippo","pluto","paperino"], (s) => (s == "pippo")) restituisce
["","pluto","paperino"]
azzera(["b","abab","ab","a"], (s) => (s.length > 1)) restituisce ["b","","","a"]
*/

function azzera(a, p){
   for(i in a){
      if(p(a[i])){ a[i] = "" }
   }
   return a
}

/*
Si scriva un programma che, letto da tastiera un numero n>0, stampi sulla  console un albero di Natale, disegnato con asterischi, 
composto da n righe  centrate di asterischi che formino un triangolo
*/



/*
2. Si scriva una funzione mid(a) che, ricevuto come argomento un array di  interi a, 
restituisca un oggetto { idx: i, val: m, avg: r } in cui: 
r è la media dei valori contenuti in a 
m è l’elemento di a di valore più vicino ad r 
i è l’indice di un elemento di a con valore m
*/

function media(a){
   let res = 0
   for(i = 0; i < a.length; i++){
      res += a[i]
   }
   return (res/a.length-1)
}

function mid(a){
   let res = { idx: 0 , val : 0, avg: 0 }
   let m = media(a)
   res.avg = m
   let val = 0 , idx = 0, diff = +Infinity
   for(i = 0; i < a.length; i++){
      if(Math.abs(a[i] - m) < diff ){ val = a[i], idx = i , diff = Math.abs(a[i] - m) }
   }
   res.val = val
   res.idx = idx
   return res

}

/*
Si scriva una funzione ruota(a) che, ricevuto come argomento un array a  
(con elementi di qualunque tipo), restituisca un array b identico ad a,
tranne  per il fatto che l’ultimo elemento di a diventa il primo di b, e tutti gli altri sono  spostati di una posizione.
Esempio: ruota( [ “Qui”, “Quo”, “Qua” ] ) = [ “Qua”, “Qui”, “Quo” ] 
*/

let a = ['Qui', 'Quo' , 'Qua']

function ruota(a){
   let b = []
   for(i = 0 ; i < a.length; i++){
      b.push(a[i-1])
   }
   b[0] = a[a.length -1]
   return b
}

function convolve(f){
   if(f != undefined){
   return function g(a){
   if(a.length < 2) return undefined
   let res = []
   for(i = 0;  i < a.length ; i++){
      if(i == 0){ res.push(f(0 , a[0], a[i+1])) }
      else if(i == a.length - 1){ res.push(f(a[i-1],a[i], 0 )) }
      else { res.push(f(a[i-1],a[i], a[i+1])) }
   }
      return res
   }
}
   return undefined
}

function scontrino(a){
   let res = {}
   let tot = 0
   for(i = 0; i < a.length ; i++){
      var k = a[i].barcode
      if(!(k in res)){ res[k] = {} ; res[k].quantità = 1; res[k].prezzo = a[i].prezzo }
      else res[k].quantità++
      tot += a[i].prezzo
   }
   res.totale = tot
   return res
}

prodotti = [
   {'nome': 'tonno', 'barcode': '33',
   'prezzo': 2.50},
   {'nome': 'pasta', 'barcode': '12',
   'prezzo': 0.90},
   {'nome': 'pasta', 'barcode': '12', 
   'prezzo': 0.90},
   {'nome': 'tonno', 'barcode': '33',   
   'prezzo': 2.50},
   {'nome': 'tonno', 'barcode': '33',   
   'prezzo': 2.50},
   {'nome': 'bagnoschiuma', 'barcode': 
   '456', 'prezzo': 3.50}
]

function min(s){
   let min = Infinity
   for(k in s){
      if(k <= min){ min = k }
   }
   return min
}

function max(s){
   let max = -Infinity
   for(k in s){
      if(k >= max){ max = k }
   }
   return max
}


function unisci_estremi(a, b){
   let res = {}
   res[min(a)] = true
   res[max(a)] = true
   res[min(b)] = true
   res[max(b)] = true

   return res
}

function sbarbalbero(t){
   if(t!= undefined){
      if(t.val == "barbalbero"){
         t.val = "sbarbato"
         t.figli = []
      }
      else if( 'figli' in t ){
      for(i = 0 ; i < t.figli.length; i++){
         sbarbalbero(t.figli[i])
         }
      } 
   }
}

let tree = {val:"bilbo", figli: [{val: "barbalbero", figli: [{val: "frodo"},{val: "samvise"}]},{val: "sauron", figli: [{val: "trudy"}]},{val: "barbalbero", figli: []}]}


my_v = [
   {'tipo': 'auto', 'cilindrata': 1500, 'peso': 1400},
   {'tipo': 'moto', 'cilindrata': 50, 'peso': 2000},
   {'tipo': 'moto', 'cilindrata': 50, 'peso': 1300},
   {'tipo': 'camion', 'cilindrata': 8000, 'peso': 2000},
   {'tipo': 'moto', 'cilindrata': 125, 'peso': 300},
   {'tipo': 'auto', 'cilindrata': 1500, 'peso': 1400},
   {'tipo': 'auto', 'cilindrata': 1500, 'peso': 1600},
   {'tipo': 'moto', 'cilindrata': 800, 'peso': 500},
   {'tipo': 'auto', 'cilindrata': 3000, 'peso': 1100}
]


function my_compareFn(a, b){
   let tipo_uguale = false
   let cilindrata_uguale = false
   if(a.tipo > b.tipo){ return 1 }
   else if(a.tipo < b.tipo) {return -1}
   else tipo_uguale = true
   if(tipo_uguale && a.cilindrata > b.cilindrata){
       return 1
   }
   else if(tipo_uguale && a.cilindrata < b.cilindrata){
       return -1
   }
   else cilindrata_uguale = true
   if(tipo_uguale && cilindrata_uguale){
       if(a.peso > b.peso) return 1
       else if(a.peso < b.peso) return -1
   }
   else return 0
}

/*
function sort_vehicles(v){
   v.sort( (a, b) => my_compareFn(a,b)) 
} 

*/

/*
Si scriva una funzione mulidx(a) che, dato un array a con elementi qualunque, restituisca un nuovo array b, 
contenente (nello stesso ordine) soltanto gli elementi numerici di a che sono un multiplo del proprio indice, 
e gli elementi stringa di a la cui lunghezza è un multiplo del proprio indice.
*/

const assert = require('assert')

function mulidx(a){
   let b = []
   for(i = 0; i < a.length ; i++ ){
         if(a[i]%i == 0 ){ b.push(a[i]) }
         if((a[i].length) == 0 && i == 0){b.push(a[i])}
         else if((a[i].length)%i == 0){ b.push(a[i]) }
   }
   return b
}

/*
Si scriva una funzione JS maxDepth(T), dove T è un albero binario come descritto a lezione (oggetti con chiavi val e sx e dx). 
La funzione deve restituire la massima profondità dell'albero T: la lunghezza del cammino più lungo tra tutti quelli dalla radice alle sue foglie 
(la radice ha profondità zero)
*/
function maxDepth(T){


}

/*

*/

