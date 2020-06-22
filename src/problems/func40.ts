var A:number=6;
var B:number=6;
var C:number=4;
var I:number=5;
var E:number=6;
var F:number=7;
var G:number=8;

function factorial(n: number, accumulator: number = 1): number {
    if(n === 1)
        return accumulator

    return factorial(n - 1, n * accumulator)
}

function Exp1(x:number,e:number) {
    if(e>0){
        var result = 1;
        for(var i=0; i < x; i++){
            var exp = Math.pow(x,i+1)/factorial(i+1);
            console.log("Pow "+ i + " " + Math.pow(x,i+1));
            console.log("Factorial " + i + " " +factorial(i+1));
            console.log(exp);
            if(exp>e)
                result+=exp;
            else
                result=result;
        }


        return result;
    }
    else
        return "E este egal sau mai mic ca 0"

}

console.log(Exp1(A,B));
// console.log(Exp1(A,C));
// console.log(Exp1(A,I));
// console.log(Exp1(A,E));
// console.log(Exp1(A,F));
// console.log(Exp1(A,G));
// console.log(factorial(5));