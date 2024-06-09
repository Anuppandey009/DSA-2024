//Decimal to binary number using recursion
let res =[]
function binary(n){
    if(n==0){
        return 0
    }
binary(Math.floor(n/2))
res.push(n%2)
}

binary(5)
console.log(res)