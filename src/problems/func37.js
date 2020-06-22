"use strict";
exports.__esModule = true;
var P = 2;
var A = 6;
var B = 4;
var C = 3;
function Power1(A, B) {
    if (A > 0) {
        return Math.exp(B * Math.log(A));
    }
    else {
        return 0;
    }
}
exports.Power1 = Power1;
console.log(Power1(A, P));
console.log(Power1(B, P));
console.log(Power1(C, P));
