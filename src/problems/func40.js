var A = 6;
var B = 6;
var C = 4;
var I = 5;
var E = 6;
var F = 7;
var G = 8;
function factorial(n, accumulator) {
    if (accumulator === void 0) { accumulator = 1; }
    if (n === 1)
        return accumulator;
    return factorial(n - 1, n * accumulator);
}
function Exp1(x, e) {
    if (e > 0) {
        var result = 1;
        for (var i = 0; i < x; i++) {
            var exp = Math.pow(x, i + 1) / factorial(i + 1);
            console.log("Pow " + i + " " + Math.pow(x, i + 1));
            console.log("Factorial " + i + " " + factorial(i + 1));
            console.log(exp);
            if (exp > e)
                result += exp;
            else
                result = result;
        }
        return result;
    }
    else
        return "E este egal sau mai mic ca 0";
}
console.log(Exp1(A, B));
// console.log(Exp1(A,C));
// console.log(Exp1(A,I));
// console.log(Exp1(A,E));
// console.log(Exp1(A,F));
// console.log(Exp1(A,G));
// console.log(factorial(5));
