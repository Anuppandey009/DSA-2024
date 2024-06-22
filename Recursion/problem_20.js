/*
Product of 2 Numbers using Recursion
*/

function product(x,y){
    if(y==0){
        return 0
    }
   return x+product(x,y-1)
}

let res = product(2,3)
console.log(res)