export function Minmax(X: number[]) {
    let I = X[0];
    let J = X[1];
    if (I<J)
    {
        X[0] = I;
        X[1] = J;
    }
    else
    {
        X[0] = J;
        X[1] = I;
    }
    return X;
}