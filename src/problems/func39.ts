import {Power1} from "./func37";
import {Power2} from './func38';

var P:number=2;
var Q:number=2.8;
var A:number=3;
var B:number=4;
var C:number=5;




function Power3(A:number,B:number) {
    var frac:number= B - Math.floor(B);
    if (frac==0){
        return Power2(A,B);
    }
    else {
        return Power1(A,B);
    }
}

console.log(Power3(A,P));
console.log(Power3(B,P));
console.log(Power3(C,P));
console.log(Power3(A,Q));
