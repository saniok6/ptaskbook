"use strict";
exports.__esModule = true;
exports.Sign = void 0;
function Sign(x) {
    if (x < 0) {
        return -1;
    }
    if (x == 0) {
        return 0;
    }
    if (x > 1) {
        return 1;
    }
}
exports.Sign = Sign;
