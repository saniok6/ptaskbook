"use strict";
exports.__esModule = true;
exports.Swap = void 0;
function Swap(X, I, J) {
    // let X: number[];
    var first = I;
    I = J;
    J = first;
    X = [I, J];
    return X;
}
exports.Swap = Swap;
