//Sum of array elements using recursion

let arr =[1, 2, 3]
let ans=0
function arraySum(arr){
  if(arr.length==0){
    return
  }
  ans+= arr.pop()
  arraySum(arr)
}

arraySum(arr)
console.log(ans)