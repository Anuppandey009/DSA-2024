//Count Set-bits of number using Recursion

let n = 16

let bin = []

function binary(n) {
    if (n <= 0) {
        return
    }
    bin.push(n % 2)
    binary(Math.floor(n / 2))
}
binary(n)
let res = bin.reduce((acc, num) => {
    return acc + num
}, 0)


console.log(res)
