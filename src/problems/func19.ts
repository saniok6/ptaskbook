function Fact(N:number) :number {
        return N ? N * Fact(N - 1) : 1;
}


console.log(Fact(1));
console.log(Fact(2));
console.log(Fact(3));
console.log(Fact(4));
console.log(Fact(5));