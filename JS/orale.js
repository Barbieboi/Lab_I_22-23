//Ritorna Valore minimo di un albero

function minimoalbero(T){
    if(T == undefined){ return +Infinity }
    return Math.min(minimoalbero(T.sx), minimoalbero(T.dx), T.val)
}

//PREAPPELLO PRENOTARSI SU VALUTAMI 