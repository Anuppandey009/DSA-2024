// Count Occurrences Of Anagrams | Sliding Window
// Problem Statement is we have to count the number of occurrences of anagram in a given string


// Solution

let str = "aabaa";
let ptr = "aaba";

let count = 0;
let k = ptr.length;

let arr = str.split("");

let i = 0;
let j = 0;
let res = [];

while (j < arr.length) {
  res.push(arr[j]);
  
  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    let str1obj = res.reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

    let str2obj = ptr.split("").reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

    if (JSON.stringify(str1obj) === JSON.stringify(str2obj)) {
      count++;
    }

    res.shift();
    i++;
    j++;
  }
}

console.log(count);
