//Count all combinations of coins to make a given value sum

/*
Input: sum = 4, coins[] = {1,2,3}, 
Output: 4
Explanation: there are four solutions: {1, 1, 1, 1}, {1, 1, 2}, {2, 2}, {1, 3}. 
*/

let sum = 4
let coins = [1, 2, 3]
let count = 0
let index = 0

function possibleCount(sum, coins, index) {
    if (sum == 0) {
        count++
        return
    }

    if (sum < 0 || index >= coins.length) {
        return
    }

    possibleCount(sum - coins[index], coins, index)
    possibleCount(sum, coins, index + 1)
}

possibleCount(sum, coins, index)
console.log(count)