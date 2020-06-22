function RingS(R1, R2) {
    if (R1 > R2) {
        var Pi = 3.14;
        var SR1 = Pi * Math.pow(R1, 2);
        var SR2 = Pi * Math.pow(R2, 2);
        return SR1 - SR2;
    }
    else {
        return "R1 trebuie sa fie mai mare ca R2";
    }
}
console.log(RingS(2, 1));
console.log(RingS(7, 2));
console.log(RingS(9, 5));
console.log(RingS(1, 2));
