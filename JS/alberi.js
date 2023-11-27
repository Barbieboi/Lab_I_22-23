const prompt = require('prompt-sync')() ;


function esempioBin() {
    var T = {}
    T.val=7
    T.sx={val: 4, sx: {val: 3}, dx: {val:12, dx:{val: 21} , sx: {val: 4, dx:{val:3}, sx:{val: 8}}}}
    T.dx={val: 11, dx: {val: 1}, sx: {val:9, /* sx:  {val: 6}*/ } }
    return T
}

var albero = esempioBin()

function maxT1(t){
if (t==undefined) return -Infinity
return Math.max(t.val,maxT1(t.sx),maxT1(t.dx))
}


function sumT(t){
    if(t == undefined) return 0
    return t.val + sumT(t.sx) + sumT(t.dx)
}


function IsInT(t, v){
    if(t == undefined) return false
    return t.val == v || IsInT(t.sx, v) || IsInT(t.dx, v)
}


function contaT(t){
    if(t == undefined) return 0
    return 1 + contaT(t.sx) + contaT(t.dx)
}

function tagliaT(t, v){
    if(t!= undefined){
        if(t.val == v && t.sx) delete t.sx ; else tagliaT(t.sx, v)
        if(t.val == v && t.dx) delete t.dx ; else tagliaT(t.dx, v) 
    }
}


