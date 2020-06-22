export function ShiftRight3(X:any[]) {
    let first = X.pop();
    X.unshift( first );
    return X;
}