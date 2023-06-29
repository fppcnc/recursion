function fakultaet(n: number): number {
    if (n === 0) {
        return 1
    } else {
        return n * fakultaet(n - 1)
    }
}

console.log(fakultaet(5))

function fakultaet2(n: number): number {
let result: number = 1;
while (n >= 1) {
    result = result * n;
    n--;
}
return result;
}

console.log(fakultaet2(5))