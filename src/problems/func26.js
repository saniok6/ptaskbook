"use strict";
exports.__esModule = true;
exports.RectPS = void 0;
function RectPS(X1, X2, Y1, Y2) {
    var P = (Math.abs(X2 - X1) + Math.abs(Y2 - Y1)) * 2;
    var S = Math.abs(X2 - X1) * Math.abs(Y2 - Y1);
    return "Perimeters: " + P + " Areas: " + S;
}
exports.RectPS = RectPS;
