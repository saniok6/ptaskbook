"use strict";
exports.__esModule = true;
exports.Minmax = void 0;
function Minmax(X) {
    var I = X[0];
    var J = X[1];
    if (I < J) {
        X[0] = I;
        X[1] = J;
    }
    else {
        X[0] = J;
        X[1] = I;
    }
    console.log(X[0]);
    console.log(X[1]);
    return X;
}
exports.Minmax = Minmax;
