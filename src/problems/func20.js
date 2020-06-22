function Fact2(N) {
    if (N == 0 || N == 1)
        return 1;
    return N ? N * Fact2(N - 2) : 1;
}
console.log(Fact2(5));
console.log(Fact2(6));
