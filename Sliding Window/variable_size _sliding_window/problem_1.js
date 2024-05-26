let arr = [4,1,1,1,2,3,5]

let i =0
let j=0
let max=0
let target = 5
let sum =0
while(j<arr.length) {
 sum = sum + arr[j]
 if(sum<target){
    j++
 }
else if (sum==target){
    let x = j-i+1
    max = Math.max(max,x)
 
    j++
}
else if (sum>target){
  sum =sum - arr[i]
  i++
  j++
}
}

console.log(max)