/*
Given an array of size N and an integer K, return the count of distinct numbers in all windows of size K. 

Examples: 

Input: arr[] = {1, 2, 1, 3, 4, 2, 3}, K = 4
Output: 3 4 4 3
Explanation: First window is {1, 2, 1, 3}, count of distinct numbers is 3
                      Second window is {2, 1, 3, 4} count of distinct numbers is 4
                      Third window is {1, 3, 4, 2} count of distinct numbers is 4
                      Fourth window is {3, 4, 2, 3} count of distinct numbers is 3


*/



let arr = [1, 2, 1, 3, 4, 2, 3]
let k = 4;

let i =0
let j=0
let res =[]
let ans= []
while(j<arr.length) {
res.push(arr[j])
if(j-i+1<k){
    j++;
}
else if(j-i+1==k){
    let count = res.reduce((acc,num)=>{
      acc.add(num)
      return acc;
    },new Set()).size
    ans.push(count)
    res.shift()
    i++
    j++
}
}


console.log(ans)