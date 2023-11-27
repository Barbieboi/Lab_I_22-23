
//VERSIONE DEL MERGESORT PIU' JS
function mergeJS(a1, a2){
    let sorted = [];
  
    while (a1.length && a2.length) {
      if (a1[0] < a2[0]) sorted.push(a1.shift());
      else sorted.push(a2.shift());
    };
    
    console.log("a1:" , a1 ,  "a2:" ,  a2 ,  "a1.slice():" , a1.slice() , "a1.slice().concat(a2.slice()):", a1.slice().concat(a2.slice()) )
  
    return sorted.concat(a1.slice().concat(a2.slice()));
  };
  
  //a NON VIENE DISTRUTTO (slice)
  function mergeSortJS(a) {
    if (a.length <= 1) return a;
    let q = Math.floor(a.length / 2);
    let L = mergeSortJS(a.slice(0, q));
    let R = mergeSortJS(a.slice(q));
  
    return mergeJS(L, R);
  };

