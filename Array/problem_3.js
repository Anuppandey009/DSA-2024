/*
Move all negative numbers to beginning and positive to end with constant extra space
Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
Output: -12 -13 -5 -7 -3 -6 11 6 5
*/

let arr =[-12, 11, -13, -5, 6, -7, 5, -3, -6]
let i =-1
let j=0

while(j<arr.length){
    if(arr[j]<0){
        i++
        [arr[i],arr[j]]=[arr[j],arr[i]]
    }
    j++
}

console.log(arr)