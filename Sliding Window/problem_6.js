//First negative integer in every window of size k

/*
Given an array and a positive integer k, find the first negative integer for each window(contiguous subarray) of size k. If a window does not contain a negative integer, then print 0 for that window.

Examples:  
Input : arr[] = {-8, 2, 3, -6, 10}, k = 2
Output : -8 0 -6 -6
First negative integer for each window of size k
{-8, 2} = -8
{2, 3} = 0 (does not contain a negative integer)
{3, -6} = -6
{-6, 10} = -6
Input : arr[] = {12, -1, -7, 8, -15, 30, 16, 28} , k = 3
Output : -1 -1 -7 -15 -15 0
*/

let arr = [-8, 2, 3, -6, 10]
let k = 2

let i = 0
let j = 0
let ans = []
let res = []

while (j < arr.length) {
    if (arr[j] < 0) {
        res.push(arr[j])
    }
    if (j - i + 1 < k) {
        j++
    }
    else if (j - i + 1 == k) {
        if (res.length > 0) {
            ans.push(res[0])

            if (arr[i] == res[0]) {
                res.shift()
            }
        }
        else {
            ans.push(0)
        }

        i++
        j++
    }
}
console.log(ans)