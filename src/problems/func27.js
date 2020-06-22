"use strict";
exports.__esModule = true;
exports.DigitCS = void 0;
function DigitCS(K) {
    var C = K.toString().length;
    var S = 0;
    while (K) {
        S += K % 10;
        K = Math.floor(K / 10);
    }
    return "Amount of digits " + C + " Sum of digits " + S;
}
exports.DigitCS = DigitCS;
