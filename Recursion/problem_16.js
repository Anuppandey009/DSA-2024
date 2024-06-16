//Recursively remove all adjacent duplicates

/*
Input: azxxzy 
Output: ay 

First “azxxzy” is reduced to “azzy”. 
The string “azzy” contains duplicates, 
so it is further reduced to “ay"
*/

let str = "azxxzy".split("");
let ans = []
let index = 0
function removeAdjacentDuplicates(str, ans, index) {
    if (index == str.length) {
        return
    }
    if(ans.length !==0 && ans[ans.length-1]==str[index] ){
        ans.pop()
    }
    else{
        ans.push(str[index])
    }
    // ans.length !== 0 && ans[ans.length - 1] == str[index] ? ans.pop() : ans.push(str[index])

    removeAdjacentDuplicates(str, ans, index + 1)
}
removeAdjacentDuplicates(str, ans, index)
console.log(ans.join(""))