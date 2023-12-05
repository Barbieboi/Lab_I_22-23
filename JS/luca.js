//Contare i numeri pari in un albero K-ario

/*
function conta_pari(T){
    if(T == undefined){return 0}
    let res = 0
    if(T.val % 2 == 0){ res += 1}
    for(let t of T.figli){
        res += conta_pari(t)
    }
    return res

}

                T
            T       T
        /   |   \   |
        T   T   T   T
 

let tree = { val: 4, figli: [{val: 3 , figli: [{val : 7} , {val: 8}, {val: 10}] }, {val: 6 , figli: [{val: 12}] }] }

function maxM(t){
  if (t.figli == undefined) return t.val
  let max = t.val
  for (let f of t.figli){
    max = Math.max(max,maxM(f))
  }
  return max
}

*/

function* generatore(n){
    let i = 0
    while(i < n){
        yield i ;
        i++ ;
    }
}

let oggetto = generatore(6);

for(k of oggetto){
    console.log(oggetto[k]);
}
