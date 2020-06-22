function Quarter(x:number, y:number) {
    if(x>0 && y>0){
        return 1;
    }
    if(x<0 && y>0){
        return 2;
    }
    if(x<0 && y<0){
        return 3;
    }
    if(x>0 && y<0){
        return 4;
    }
}

console.log(Quarter(1,1));
console.log(Quarter(-1,1));
console.log(Quarter(1,-1));