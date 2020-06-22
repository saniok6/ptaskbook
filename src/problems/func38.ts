var A:number=2;
var K:number=0;
var L:number=2;
var M:number=-2;

export function Power2(A:number,N:number) {
    if(N==0){
        return 1;
    }
    if(N>0){
        return Math.pow(A,N);
    }
    if(N<0){
        return 1/Math.pow(A,Math.abs(N));
    }
}

console.log(Power2(A,K));
console.log(Power2(A,L));
console.log(Power2(A,M));