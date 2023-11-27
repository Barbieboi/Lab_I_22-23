const prompt = require('prompt-sync')() ;


function replace(arr, target , replacement){
    let res = []
    for(i = 0; i < arr.length ; i++ ){
        if(arr[i] == target){
            res.push(replacement)
        }
        else{ res.push(arr[i]) }
    }
    return res
}


function contamaggioredi(arr, threshold){
    let res = 0
    for(i = 0; i < arr.length ; i++){
        if(arr[i] > threshold ){ res++ }

    }
    return res
}

function prodotto_scalare(x , y){
    if(x.length != y.length || x.length == 0 || y.length == 0 ){ return undefined }
    let res = 0
    for(i = 0 ; i < x.length ; i++ ){
        res += ( x[i]*y[i] )
    }
    return res
}

function clip(arr, threshold ,replacement){
    if(replacement == undefined){ replacement = threshold }
    let res = []
    for(i = 0; i < arr.length ; i++ ){
        if(arr[i] > threshold) { res.push(replacement) }
        else { res.push(arr[i]) }
    }
    return res
}

function norma(v){
    let res = 0
    if(isNaN(v.x) || isNaN(v.y) ){ return res}
    res = Math.sqrt(Math.pow(v.x ,2) + Math.pow( v.y, 2))
    v.norma = true
    v.norma = res ;
    return v
}

function differenzia(trash){
    let res = { carta: [] , multimateriale: [] , indifferenziato: [] }
    for(i = 0 ; i < trash.length ; i++){
        switch( trash[i].categoria){
            case 'carta':
                res.carta.push(trash[i])
                break;
            case 'multimateriale':
                res.multimateriale.push(trash[i])
                break;
            default:
                res.indifferenziato.push(trash[i]) 
                break ;
        }

    }
    return res
}
