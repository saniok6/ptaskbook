function Mean(X, Y) {
    var arith = (X + Y) / 2;
    var geom = Math.pow((X * Y), 0.5);
    return "Arithmetical mean: " + arith + " Geometrical mean: " + geom;
}
console.log(Mean(5, 2));
