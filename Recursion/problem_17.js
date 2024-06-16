/*
Binary to Gray code using recursion
Input: 1001 
Output: 1101
Explanation: 1001 -> 1101 -> 1101 -> 1101
*/

let str = "1001".split("").map(Number);

let ans = [];
let index = 0;

function grayCode(str, index) {
  // Base case: when index reaches the length of the string, return
  if (index >= str.length) {
    return;
  }
  
  // Handle the first bit (MSB)
  if (index === 0) {
    ans[index] = str[index];
  } else {
    // Calculate the Gray code bit using XOR operation
    ans[index] = str[index - 1] ^ str[index];
  }
  
  // Recursive call for the next index
  grayCode(str, index + 1);
}

grayCode(str, index);
console.log(ans.join("")); // Output: 1100
