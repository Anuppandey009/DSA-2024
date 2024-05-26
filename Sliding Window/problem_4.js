// Problem Statement

/*
Sum of minimum and maximum elements of all subarrays of size k.

Given an array of both positive and negative integers, the task is to compute sum of minimum and maximum elements of all sub-array of size k.
*/

// Input 
let arr = [2,5,-1,7,-3,-1,-2]
let k = 4
// Output:18

//Solution

let i = 0
let j = 0
let sum = []
let ans=0
while(j < arr.length) {
  sum.push(arr[j])
  if(j-i+1 < k){
   j++
  }
  else if(j-i+1==k){
    ans+=Math.min(...sum)+Math.max(...sum)
    sum.shift()
    j++
    i++
  }
}

console.log(ans)