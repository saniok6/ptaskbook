function RingS(R1:number, R2:number) {
    if(R1>R2) {
        const Pi = 3.14;
        const SR1 = Pi * Math.pow(R1, 2);
        const SR2 = Pi * Math.pow(R2, 2);

        return SR1 - SR2;
    }
    else {
         return "R1 trebuie sa fie mai mare ca R2";
    }
}

console.log(RingS(2,1));
console.log(RingS(7,2));
console.log(RingS(9,5));
console.log(RingS(1,2));
