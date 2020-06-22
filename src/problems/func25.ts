function TringlePS(A:number) {
    const P=3*A;
    const S= (Math.pow(A,2) * Math.pow(3,0.5))/4;

    return "Perimetru: " + P + " Aria: " + S;
}

console.log(TringlePS(2));
console.log(TringlePS(3));
console.log(TringlePS(4));