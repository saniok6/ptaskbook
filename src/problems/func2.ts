function RoutCount(A : number,B : number,C : number) {
    const D : number = Math.pow(B, 2) - (4 * A * C);
if(D > 0){
    const x1 = (-1 * B + Math.sqrt(Math.pow(B, 2) - (4 * A * C))) / (2 * A);
    const x2 = (-1 * B - Math.sqrt(Math.pow(B, 2) - (4 * A * C))) / (2 * A);

    return "x1=" + x1 + " x2=" + x2;
}
if(D < 0){
    return "Ecuatia nu are solutii";
}
if(D == 0){
    const x =(-1 * B / (2 * A));
    return "x=" + x;
}
}

console.log("Delta > 0" + " " + RoutCount(1,1,-1));
console.log("Delta = 0" + " " + RoutCount(9,-12,4));
console.log("Delta < 0" + " " + RoutCount(-1/2,Math.sqrt(3),-4));