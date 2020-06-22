export function Swap(X:number[],I:number,J:number) {
   // let X: number[];
    let first = I;
    I = J;
    J = first;
    X = [I, J];
    return X;
}