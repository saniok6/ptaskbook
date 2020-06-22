var D1:number=7;
var D2:number=4;

function AddLeftDigit(D:number,K:number) {
    const x= K.toString().length;
    const result= D * Math.pow(10,x) + K;
    return result;
}

console.log(AddLeftDigit(D1,77));
console.log(AddLeftDigit(D2,200));