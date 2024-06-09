//Print reverse of a string using recursion

let str ="anup"
let arr = str.split("")
let ans =[]
function reverseStr(arr){
  if(arr.length==0 ){
  return ans
  }
  ans.push(arr.pop())
  reverseStr(arr)
}

reverseStr(arr)
console.log(ans.join(""))