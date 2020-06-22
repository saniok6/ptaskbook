export function DigitCS(K : number) {
    let C =  K.toString().length;
    let S = 0;
    while (K) {
        S += K % 10;
        K = Math.floor(K / 10);
    }
    return "Amount of digits " + C + " and Sum of digits " + S;
}
