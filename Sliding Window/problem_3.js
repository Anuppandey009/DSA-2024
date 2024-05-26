//  Maximum of all subarrays of size k | Sliding Window 

let arr=[1,3,-1,-3,5,3,6,7]
let k=3    //size of window

//expected output =[3,3,5,5,6,7]

//Solution

let i = 0
let j = 0
let res = []
let ans = []

while(j<arr.length) {
    res.push(arr[j])
    if(j-i+1<k) {
        j++
    }
    else if(j-i+1==k) {
     ans.push(Math.max(...res))
     res.shift()
     j++
     i++
    }
}

console.log(ans)