export function RectPS(X1:number,X2:number,Y1:number,Y2:number)
{
    let P = (Math.abs(X2 - X1) + Math.abs(Y2 - Y1)) * 2;
    let S = Math.abs(X2 - X1) * Math.abs(Y2 - Y1);
    return "Perimeters: " + P + " Areas: " + S;
}
