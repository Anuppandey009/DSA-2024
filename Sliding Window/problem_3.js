//   To find the maximum value in each subarray of size k in an array arr

let arr=[1,3,-1,-3,5,3,6,7]
let k=3    //size of window

//expected output =[3,3,5,5,6,7]

//Solution

let i = 0
let j = 0
let max = -Infinity
let ans = []

while(j<arr.length) {
   if(arr[j]>max){
    max=arr[j]
   }
    if(j-i+1<k) {
        j++
    }
    else if(j-i+1==k) {
     ans.push(max)
  if(arr[i]>max){
    max=-Infinity
  }
     j++
     i++
    }
}

console.log(ans)