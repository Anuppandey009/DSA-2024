/*
Find a peak element which is not smaller than its neighbours
Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find the maximum element in the array.

Note: If the array is increasing then just print the last element will be the maximum value.
Example

Input: array[]= {5, 10, 20, 15}
Output: 20
Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.

*/

function findPeak(arr,n){
    let low = 0
    let high=n-1
    while(low<=high){
        let mid = ~~((low+high)/2)
        if((mid==0 || arr[mid]>=arr[mid-1]) && (mid==n-1|| arr[mid]>=arr[mid+1])){
            return arr[mid]
        }

        else if (arr[mid-1]>arr[mid]){
            high = mid-1
        }
        else{
            low = mid+1
        }
    }
}

let arr=[5, 10, 20, 15]
let n= arr.length
let res = findPeak(arr,n)
console.log(res)

