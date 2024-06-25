

//Sum of digit of a number using recursion

let n = 165
let sum

function digitSum(n) {
    if (n == 0) {
        return 0
    }
    sum = n % 10 + digitSum(Math.floor(n / 10))
    return sum
}

digitSum(n)
console.log(sum)