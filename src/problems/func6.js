var A = 6;
var B = 10;
var C = 15;
function SumRange(Q, Z) {
    var suma = 0;
    if (Q > Z) {
        return 0;
    }
    else {
        for (var i = Q; i <= Z; i++) {
            suma += i;
        }
        return suma;
    }
}
console.log(SumRange(A, B));
console.log(SumRange(B, C));
