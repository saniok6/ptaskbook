var D1:number=7;
var D2:number=4;

function AddRightDigit(D:number,K:number) {
    if(K>0) {
        return K * 10 + D;
    }
}

console.log(AddRightDigit(D1,7));
console.log(AddRightDigit(D2,19));