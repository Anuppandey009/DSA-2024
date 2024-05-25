
//Q1. First Negative Number in every Window of Size K | Sliding Window

let arr = [12, -1, -7, 8, -15, 30, 16, 28]
let k = 3  // window size

//Solution

let i = 0
let j = 0
let res = []
let ans = []


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

        j++
        i++
    }

}

console.log(ans)