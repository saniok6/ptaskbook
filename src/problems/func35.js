"use strict";
exports.__esModule = true;
exports.ShiftRight3 = void 0;
function ShiftRight3(X) {
    var temp = X.pop();
    X.unshift(temp);
    return X;
}
exports.ShiftRight3 = ShiftRight3;
