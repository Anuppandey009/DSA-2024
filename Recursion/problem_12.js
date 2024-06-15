//Recursive function to check if a string is palindrome

let str = "racecar"
str.split("")
let left = 0
let right = str.length - 1
let flag = true
function palindrome(str, left, right) {
    if (left >= right) {
        return
    }
    else if (str[left] != str[right]) {
        flag = false
        return
    }
    palindrome(str, left + 1, right - 1)
}

palindrome(str, left, right)
console.log(flag)