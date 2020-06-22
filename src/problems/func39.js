"use strict";
exports.__esModule = true;
var func37_1 = require("./func37");
var func38_1 = require("./func38");
var P = 2;
var Q = 2.8;
var A = 3;
var B = 4;
var C = 5;
function Power3(A, B) {
    var frac = B - Math.floor(B);
    if (frac == 0) {
        return func38_1.Power2(A, B);
    }
    else {
        return func37_1.Power1(A, B);
    }
}
console.log(Power3(A, P));
console.log(Power3(B, P));
console.log(Power3(C, P));
console.log(Power3(A, Q));
