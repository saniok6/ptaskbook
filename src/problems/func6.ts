var A:number=6;
var B:number=10;
var C:number=15;


function SumRange(Q : number, Z : number) {
    let suma:number=0
    if (Q > Z){
        return 0;
    }
    else {
        for (let i = Q; i <= Z; i++) {
            suma += i;
        }
        return suma;
    }
}

console.log(SumRange(A,B));
console.log(SumRange(B,C));