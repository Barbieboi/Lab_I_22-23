interface tree{
    val?: number
    sx?: tree
    dx?: tree
}

function PotaAlberiT(T?: tree): void{
    if(T  && T.val){ 
        if(T.val < 0){
            delete T.val
            delete T.sx
            delete T.dx
        }
        if(T.sx){ 
            if(T.sx.val && T.sx.val < 0){ delete T.sx }
            else PotaAlberiT(T.sx)
        }
        if(T.dx){ 
            if(T.dx.val && T.dx.val < 0){ delete T.dx }
            else PotaAlberiT(T.dx)
        }
    }
}

/*
*
*/

type cbool = boolean | 0 | 1
type yesno<T> = { yes: T[] , no: T[] }

function setaccio<T>(a: T[] , f: (arg: T) => cbool ): yesno<T> {
    let res: yesno<T> = { yes : [] , no : [] }
    for( let i: number = 0 ; i < a.length ; i++){
        if(f(a[i])||f(a[i]) == 1){res.yes.push(a[i])}
        else {res.no.push(a[i])}
    }
    return res
}

/*
*
*/

interface nodo{
    val: number ;
    piccolo: number ;
    sx?: nodo 
    dx?: nodo 
} ;

function contaMin(T?: nodo):number{
    if(T == undefined){return Infinity}
    T.piccolo = Math.min(T.val, contaMin(T.dx) , contaMin(T.sx))
    return T.piccolo ;
}

/*
*
*/

enum TipoLavaggio{
    Intensivo = 30 , 
    Secco = 60 ,
    Delicati = 30
}

enum TipoTessuto{
    Cotone = 1.1 ,
    Seta = 2 ,
    Sintetico = 0.9 ,
    Lana = 1.75 
}

type Lavaggio = [ TipoTessuto , TipoLavaggio ]

class LavaggioError extends Error{}

function lavaggio_check(a: Lavaggio):void{
    if(((a[0] == TipoTessuto.Seta || a[0] == TipoTessuto.Lana) && a[1] == TipoLavaggio.Intensivo) ||(a[0] == TipoTessuto.Sintetico && a[1] == TipoLavaggio.Secco)){
        throw new LavaggioError ;
    }
}

function lavaggio_comp(a: Lavaggio , b:Lavaggio):number{
    let time_a: number = a[0]*a[1] 
    let time_b: number = b[0]*b[1]
    if(time_a < time_b){ return -1 }
    else if(time_a > time_b){ return 1 }
    else return 0
}

function processa(lavaggi: Lavaggio[]):void{
    for(let i: number = 0 ; i < lavaggi.length ; i++){
        lavaggio_check(lavaggi[i])
    }
    lavaggi.sort((a , b) => lavaggio_comp(a , b))
}




