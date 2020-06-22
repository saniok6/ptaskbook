export function ShiftLeft3(X:any[]) {
    let end = X.shift();
    X.push(end);
    return X;
}