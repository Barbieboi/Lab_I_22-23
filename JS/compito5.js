const assert = require('assert')
const { PassThrough } = require('stream')


class InvalidMoney extends Error{}
class ExcessiveMoney extends Error {}
class InsufficientMoney extends Error {}

class ContoBancario{
    constructor(saldoIniziale, massimale){
        if(saldoIniziale < 0 || massimale < 0 ){ throw new InvalidMoney() }
        this.saldo = saldoIniziale
        this.massimale = massimale
    }

    deposito(valore){
        if(valore < 0){ throw new InvalidMoney() }
        else if(valore > this.massimale){ throw new ExcessiveMoney() }
        else this.saldo += valore
    }

    prelievo(valore){
        if(valore < 0){ throw new InvalidMoney() }
        else if(valore > this.saldo){ throw new InsufficientMoney() }
        else this.saldo -= valore
    }

}

function applica(conto,depositi,prelievi){
    var res = true
    for(var j = 0;  j < depositi.length; j++){
        if( depositi[j] < 0 || prelievi[j] < 0 ){
            throw new InvalidMoney()
        }
    }

    for(i = 0; i< depositi.length; i++){
        try{
           conto.deposito(depositi[i]) 
        }
        catch(e){
            return false
        }
        try{
            conto.prelievo(prelievi[i])
        }
        catch(e){
            return false
        }
    }
    return res
}

class ErroreTarga extends Error {}
class ErroreCilindrata extends Error {}

class Veicolo{
    constructor(modello, targa){
        this.modello = modello
        this.targa = targa
    }
}

class Automobile extends Veicolo {
    constructor(modello, targa){
        if(targa.length != 7){ throw new ErroreTarga }
        super(modello, targa)
    }
}

class Motoveicolo extends Veicolo {
    constructor(modello, targa, cilidrata){
        if(targa.length != 4){ throw new ErroreTarga }
        else {super(modello, targa)
        this.cilidrata = cilidrata}
    }
}

class Motociclo extends Motoveicolo {
    constructor(modello, targa,cilidrata){
        if(cilidrata < 50){throw new ErroreCilindrata}
        else super(modello, targa, cilidrata)
    }
}

class Ciclomotore extends Motoveicolo {
    constructor(modello, targa, cilidrata){
        if(cilidrata < 0 || cilidrata > 50){ throw new ErroreCilindrata }
        else super(modello, targa ,cilidrata)
    }
}

function minimoCilindrata(veicoli){
    if(veicoli.length == 1 && !(veicoli[0] instanceof Motoveicolo) ){
        return undefined
    }
    if(veicoli[0] instanceof Motoveicolo){
        return Math.min(veicoli[0].cilidrata, minimoCilindrata(veicoli.shift()) )    
    }
}


class SectorError extends Error{}

class Stadio{
    constructor(n , m){
        this.ospiti = {}
        this.casa = {}
        for(i = 0; i< n; i++){
            this.ospiti[i] = true
        }
        for(j = 0; j < m; j++){
            this.casa[j] = true
        }
    }
    prenota_posto(s,i){
    if(s =! "ospiti" || s!= "casa" ){ throw new SectorError }
    else{
        if(this.s[i] != true ){ return false }
        else{ this.s[i] == true
            return true
        }
        }
    }
    posti_liberi(s){
        if(s =! "ospiti" || s!= "casa" ){ throw new SectorError }
        else {
        var res
        for(k in this.s){
            if(this.s[k] == true ){ res++ }
        }
        return res
    }
    }
    is_full(){
        for(k of this.casa){
            if(k == true){return false}
        }
        for(p of this.ospiti){
            if(p == true){return false}
        }
    }
    svuota_stadio(){
        for(k in this.casa){
            this.casa[k] = true
        }
        for(p in this.ospiti){
            this.ospiti[p] = true
        }
    }

}

class RangeError extends Error{}

function* chain_diff(f,k){
    if(k <= 0){ throw new RangeError }
    for(i = 0; i< Infinity ; i++){
        if(i == 0 ){ yield f(0)*(-1) }
        else yield(f((i - 1)*k) - f(i*k))
    }         
}