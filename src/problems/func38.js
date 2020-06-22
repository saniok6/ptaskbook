"use strict";
exports.__esModule = true;
var A = 2;
var K = 0;
var L = 2;
var M = -2;
function Power2(A, N) {
    if (N == 0) {
        return 1;
    }
    if (N > 0) {
        return Math.pow(A, N);
    }
    if (N < 0) {
        return 1 / Math.pow(A, Math.abs(N));
    }
}
exports.Power2 = Power2;
console.log(Power2(A, K));
console.log(Power2(A, L));
console.log(Power2(A, M));
