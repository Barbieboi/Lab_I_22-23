const assert = require('assert')
const { isNull } = require('util')

/*
Si scriva una funzione map_tree(tree, sx_fun, dx_fun) che, dato un albero binario e due funzioni sx_fun e dx_fun, 
restituisca un altro albero senza alterare l'originale. Nell'albero risultante, 
il valore di ciascun figlio di sinistra è sostituito con il risultato dell’applicazione di sx_fun; rispettivamente, 
i figli di destra sono sostituiti dall’applicazione di dx_fun. Se sx_fun o dx_fun sono undefined, il valore del nodo non viene alterato. 
Si assuma che alla radice si applichi la funzione dx_fun.

Notazione.

Come visto a lezione, un albero binario è codificato come un oggetto JavaScript con proprietà val, sx, e dx, 
dove sx e dx sono rispettivamente il ramo di sinistra e di destra. L’albero segnala l’assenza di un figlio con il valore null nella rispettiva proprietà.
*/

function map_(t, sx_fun, dx_fun){
    if(t != null){
        if(t.dx != null){
            if(dx_fun){ t.dx.val = dx_fun(t.dx.val)}
            map_(t.dx, sx_fun, dx_fun)
        }
        if(t.sx != null){ 
            if(sx_fun){t.sx.val = sx_fun(t.sx.val)} 
            map_(t.sx, sx_fun, dx_fun)
        }
    }
}


function map_rad(t, sx_fun, dx_fun){
    map_(t, sx_fun , dx_fun)
    if(dx_fun){t.val = dx_fun(t.val)}
}

function map_tree(tree , sx_fun, dx_fun){ 
    var t = {...tree}
    map_rad(t ,sx_fun, dx_fun)
    return t
}

// Test Case 1
var tree = {
    'val': 5,
    'sx': {
      'val': 8,
      'sx': {
        'val': 2,
        'sx': null,
        'dx': null
      },
      'dx': {
        'val': 4,
        'sx': null,
        'dx': null
      }
    },
    'dx': {
      'val': 10,
      'sx': null,
      'dx': {
        'val': 7,
        'sx': null,
        'dx': null
      }
    }
  }
  var tree_copy = JSON.parse(JSON.stringify(tree));
  var target = {
    'val': 4,
    'sx': {
      'val': 9,
      'sx': {
        'val': 3,
        'sx': null,
        'dx': null
      },
      'dx': {
        'val': 3,
        'sx': null,
        'dx': null
      }
    },
    'dx': {
      'val': 9,
      'sx': null,
      'dx': {
        'val': 6,
        'sx': null,
        'dx': null
      }
    }
  }

var result = map_tree(tree, (x) => x+1, (x) => x-1)
// Check result
//assert.deepEqual(result, target)
// Check original tree
//assert.deepEqual(tree, tree_copy)


/*
Sia partite un array di oggetti, dove ogni oggetto contiene uno storico degli scontri diretti tra due squadre, 
con i seguenti campi:
squadraCasa: nome della squadra che gioca in casa
squadraOspite: nome della squadra ospite
vittorieCasa: numero di vittorie della squadra in casa
totalePartite: numero di incontri totali tra le due squadre
Si scriva una funzione pronostico(partite) che restituisca un array di oggetti a cui si aggiunge la proprietà 
probVincita calcolata come vittorieCasa/totalePartite arrotondata alla seconda cifra decimale (più vicina).
In caso di totalePartite uguale a zero, la probabilità di vincita è zero.
L'array ritornato deve essere ordinato in maniera decrescente in base alla probabilità di vincita della squadra di casa; 
a parità di probabilità di vincita, ordinare alfabeticamente per il nome della squadra di casa.
Tip: L'arrotondamento di una variabile x alla seconda cifra decimale (più vicina) si può calcolare con Math.round(100*x)/100
*/
function compare(a, b){                        //ANCONA         //NAPOLI
    if(a.probVincita == b.probVincita){ return b.squadraCasa > a.squadraCasa }
    else return b.probVincita - a.probVincita
}

function pronostico(partite){
    let res = []
    let item = {}
    let k = 'probVincita'
    let p_V = 0
    for(i = 0 ; i < partite.length; i++){
        item = partite[i]
        p_V = Math.round(100*(item.vittorieCasa/item.totalePartite))/100
        item.totalePartite == 0?item[k] = 0:item[k] = p_V
        res.push(item)
    }
    res.sort((a,b) => compare(a,b))

    return res
}

// Test Case 1
var partite = [
    {"squadraCasa": "Monteriggioni",
      "squadraOspite": "Poggibonsi",
      "vittorieCasa": 2,
      "totalePartite": 15},
    {"squadraCasa": "Monteriggioni",
      "squadraOspite": "Massa",
      "vittorieCasa": 7,
      "totalePartite": 8},
    {"squadraCasa": "Massa",
      "squadraOspite": "Carrara",
      "vittorieCasa": 9,
      "totalePartite": 10},
    {"squadraCasa": "Poggibonsi",
      "squadraOspite": "Monteriggioni",
      "vittorieCasa": 12,
      "totalePartite": 13},
    ]

/*
Si scriva una funzione recludi_punti_fissi(f) che prenda in input una funzione f (da insiemi a insiemi) e 
restituisca una nuova funzione. La nuova funzione prende in input un array di insiemi di interi A e un intero n, 
e modifica A in place eliminando gli ultimi n punti fissi di f dall'array. (Si ricordi che, data una funzione f definita su insiemi, 
un insieme X è punto fisso di f se f(X) = X)       
*/

function sub_set(a ,b){
    for(k in a){
        if(!(k in b)){ return false }
    }
    return true
}

function same_set(a,b){
    return sub_set(a, b) && sub_set(b, a)
}

function recludi_punti_fissi(f){
    return function (A , n){
        i = 1
        for(j = A.length - 1 ; j > 0 ; j-- ){
                if(same_set(f(A[j]), A[j]) && i <= n ){A[j] = null ; i++ }
            }
        let a = A.filter(a => a != null )
        return A = a
    }
}

/*
*
*
*/

function check_array(arr){
    if(arr.length <= 3){ return true }
    if((arr[1] + arr[arr.length - 2])%(arr[0] + arr[arr.length - 1]) == 0 ){ 
        arr.shift() ; arr.pop()
        return check_array(arr) }
    else return false
}

assert.equal(check_array([1,4,8,5,3,31,4,2,2]), true)

/*
*
*
*/

function presente(concessionaria, auto){
    return concessionaria.some(a => a == auto)
}

function disponibili(concessionaria){
    return concessionaria.filter(a => a.Disponibile)
}

function filtra_veicolo(anno_macchina , anno ,operatore){
    switch(operatore){
        case ">":
            return anno_macchina > anno
            break;
        case "<":
            return anno_macchina < anno
            break;
        case "==":
            return anno_macchina == anno 
            break;
        default: break
    }
}

function filtra_per_anno(concessionaria, anno, operatore){
    var op = ["<" , ">" , "=="]
    if(op.some(a => a == operatore)){
    return concessionaria.filter(a => filtra_veicolo(a.Anno , anno, operatore))
        }
    else return undefined   
}


/*
*
*
*/

function taglia_nodi_interni(T, m){
    if(T == null){ return  null }
    for(i = 0; i < T.figli.length ;i++ ){
        if(T.figli[i].figli.length < m ){ T.figli.splice(i); i = 0 }
        taglia_nodi_interni(T.figli[i], m)
    }
}


var T0 = 
{val: 0, figli: [
    {val: 1, figli:[
        {val: 5, figli: [
            {val: 17, figli:[]},
            {val: 18, figli:[]}
        ]}, 
        {val: 6, figli: []},
        {val: 7, figli: []}]
    },
    {val : 2, figli:[
        {val: 8, figli: [
            {val: 20, figli: []},
            {val: 21, figli: []},
            {val: 22, figli: []}
        ]}]
    },
    {val : 3, figli:[
        {val: 11, figli: []}, 
        {val: 12, figli: []},
        {val: 13, figli: []}]
}]};

taglia_nodi_interni(T0, 4);
assert.deepEqual(T0, {val: 0, figli:[]});
