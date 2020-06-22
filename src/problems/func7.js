function Calc(A, B, Op) {
    if (Op == 1) {
        var N1 = A - B;
        return "N1 " + N1;
    }
    if (Op == 2) {
        var N2 = A * B;
        return "N2 " + N2;
    }
    if (Op == 3) {
        var N3 = A / B;
        return "N3 " + N3;
    }
}
console.log("N1= " + Calc(10, 2, 1));
console.log("N2= " + Calc(10, 2, 2));
console.log("N3= " + Calc(10, 2, 3));
