const { Console } = require("console")

class PuntoCartesiano {
    constructor(x , y){
        this.x = x
        this.y = y
    }
    dist(q){ 
        return Math.sqrt(Math.pow( (this.x - q.x ) , 2)+Math.pow( (this.y - q.y ) , 2)) 
    }
    translate(q){
        this.x += q.x
        this.y += q.y
    }
    zero(){ this.x = 0 ; this.y = 0 }
}

class Cineteca{
    constructor(){
        this.elenco = []
    }
    add(titolo,regista ,anno){
        this.elenco.push({titolo:titolo , regista:regista , annoUscita:anno , volteVisto: 0 })
        return this.elenco.length
    }
    remove(titolo){
        let j = -1
        for(var i = 0 ;i < this.elenco.length; i++){
            if(this.elenco[i].titolo == titolo){ j = i }
        }
        if(j > -1) {this.elenco.splice(j,1)}
        return this.elenco.length
    }
    count(){ return this.elenco.length }
    
    vedi(titolo){
        for(var i = 0 ; i < this.elenco.length ; i++){
            if(this.elenco[i].titolo == titolo){this.elenco[i].volteVisto++ ; return this.elenco[i].volteVisto }
        }
        return -1
    }
}

class Collezione{
    constructor(){
        this.dati = []
    }
    occurrences(o){
        return this.dati.filter((el) => el == o ).length
    }
    len(){
        return this.dati.length
    }
    isEmpty(){ return this.dati.length > 0 } 
}

class Coda extends Collezione{
    add(o){
        this.dati.push(o)
    }
    remove(){
        return this.dati.shift()
    }
}

class Pila extends Collezione{
    add(o){
        this.dati.push(o)
    }
    remove(){
        return this.dati.pop()
    }
}

function mediaCollezioni(lista){
    var sum = 0
    for(i = 0; i < lista.length; i++){
        sum += lista[i].len()
    }
    return sum/(lista.length + 1)
}

class Canino{
    constructor(n, e){
        this.nome = n
        this.eta = e
        this.num_actions = 0
    }
    bevi(){ this.num_actions++ }
    mangia(){this.num_actions++}
}

class Lupo extends Canino{
    ulula(){ this.num_actions++ }
}

class Cane extends Canino{
    abbaia(){this.num_actions++}
}

class Pitbull extends Cane {}
class Labrador extends Cane {}
 

class Studente{ 
    constructor(m, n, l = " " , a = 0 , c = "N" , naz = " ") {
        this.matricola = m
        this.nome = n
        this.laurea = l
        this.anno = a
        this.corso = c
        this.nazionalita = naz
        this.carriera = []
    }

    passato(esame){
        this.carriera.push(esame)
    }
    media(){
        let sum = 0
        let v = 0
        for(i = 0; i < this.carriera; i++){
            if(this.carriera[i].lode){ v = 32 }
            else v = this.carriera[i].voto
            sum += v*this.carriera[i].cfu
            v = 0
        }
        return sum/this.carriera.length + 1
    }
}

class NoSuchElementException extends Error{}

class MultiSet{
    constructor(s = {}){
        this.set = s
    }
    add(e){
        if(e in this.set){ this.set[e] += 1 }
        else this.set[e] = 1
    }

    remove(e){
        if(e in this.set){ delete this.set[e] }
        else throw new NoSuchElementException("e not found")
    }
    get size(){
        var res = 0
        for(k in this.set){
            res += this.set[k]
        }
        return res
    }
}

function *babylon(n){
    for(i = 0; i < 6 ; i++){
        yield v = (n/2 + 1/n)
        n = v
    }
}

function *decadimento(n,k){
    var p = 0
    while(p < 25){
        yield Math.round(n/(Math.pow(k, p)))
        p++
    }
}

for(val of decadimento(10000000000, 3)){
    console.log(val)
}