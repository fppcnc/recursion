function fakultaet(n:number): number {
    if (n === 0) {
        return 1
    } else {
        return n * fakultaet(n - 1)
    }
}

console.log(fakultaet(5))