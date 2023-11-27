"use strict";
function PotaAlberiT(T) {
    if (T && T.val) {
        if (T.val < 0) {
            delete T.val;
            delete T.sx;
            delete T.dx;
        }
        if (T.sx) {
            if (T.sx.val && T.sx.val < 0) {
                delete T.sx;
            }
            else
                PotaAlberiT(T.sx);
        }
        if (T.dx) {
            if (T.dx.val && T.dx.val < 0) {
                delete T.dx;
            }
            else
                PotaAlberiT(T.dx);
        }
    }
}

function setaccio(a, f) {
    let res = { yes: [], no: [] };
    for (let i = 0; i < a.length; i++) {
        if (f(a[i]) || f(a[i]) == 1) {
            res.yes.push(a[i]);
        }
        else {
            res.no.push(a[i]);
        }
    }
    return res;
}
;
function contaMin(T) {
    if (T == undefined) {
        return Infinity;
    }
    T.piccolo = Math.min(T.val, contaMin(T.dx), contaMin(T.sx));
    return T.piccolo;
}
/*
*
*/
var TipoLavaggio;
(function (TipoLavaggio) {
    TipoLavaggio[TipoLavaggio["Intensivo"] = 30] = "Intensivo";
    TipoLavaggio[TipoLavaggio["Secco"] = 60] = "Secco";
    TipoLavaggio[TipoLavaggio["Delicati"] = 30] = "Delicati";
})(TipoLavaggio || (TipoLavaggio = {}));
var TipoTessuto;
(function (TipoTessuto) {
    TipoTessuto[TipoTessuto["Cotone"] = 1.1] = "Cotone";
    TipoTessuto[TipoTessuto["Seta"] = 2] = "Seta";
    TipoTessuto[TipoTessuto["Sintetico"] = 0.9] = "Sintetico";
    TipoTessuto[TipoTessuto["Lana"] = 1.75] = "Lana";
})(TipoTessuto || (TipoTessuto = {}));
class LavaggioError extends Error {
}
function lavaggio_check(a) {
    if (((a[0] == TipoTessuto.Seta || a[0] == TipoTessuto.Lana) && a[1] == TipoLavaggio.Intensivo) || (a[0] == TipoTessuto.Sintetico && a[1] == TipoLavaggio.Secco)) {
        throw new LavaggioError;
    }
}
function lavaggio_comp(a, b) {
    let time_a = a[0] * a[1];
    let time_b = b[0] * b[1];
    if (time_a < time_b) {
        return -1;
    }
    else if (time_a > time_b) {
        return 1;
    }
    else
        return 0;
}
function processa(lavaggi) {
    for (let i = 0; i < lavaggi.length; i++) {
        lavaggio_check(lavaggi[i]);
    }
    lavaggi.sort((a, b) => lavaggio_comp(a, b));
}


