var D1 = 7;
var D2 = 4;
function AddLeftDigit(D, K) {
    var x = K.toString().length;
    var result = D * Math.pow(10, x) + K;
    return result;
}
console.log(AddLeftDigit(D1, 77));
console.log(AddLeftDigit(D2, 200));
