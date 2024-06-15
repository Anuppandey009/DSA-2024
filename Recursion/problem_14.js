//Print Fibonacci Series in reverse order using Recursion

function fib(n) {
  if (n == 0) {
    return 0
  }
  if (n == 1) {
    return 1
  }
  return fib(n - 1) + fib(n - 2)
}

function fibSeries(n) {
  for (let i = n; i >= 0; i--) {
    let res = fib(i)
    console.log(res)
  }
}

fibSeries(9)