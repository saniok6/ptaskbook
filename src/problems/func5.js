function TriangleP(a, h) {
    var b = Math.sqrt(Math.pow((a / 2), 2) + Math.pow(h, 2));
    var Perimeter = 2 * b + a;
    return Perimeter;
}
console.log(TriangleP(2, 1));
console.log(TriangleP(4, 5));
console.log(TriangleP(8, 10));
