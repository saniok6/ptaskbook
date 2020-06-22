var P:number=2;
var A:number=6;
var B:number=4;
var C:number=3;

export function Power1(A:number,B:number) {
    if(A>0) {
        return Math.exp(B * Math.log(A));
    }
    else
    {
        return 0;
    }
}

console.log(Power1(A,P));
console.log(Power1(B,P));
console.log(Power1(C,P));