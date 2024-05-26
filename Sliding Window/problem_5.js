// Problem Statement
/*
Given an array arr[] of N integers and an integer K, the task is to find the minimum and maximum of all subarrays of size K. Examples:

int arr[] = { 5, 4, 3, 2, 1, 6, 3, 5, 4, 2, 1 };
  int k = 3;
Output:
3 5
2 4
1 3
1 6
1 6
3 6
3 5
2 5
1 4
*/


let arr =[5, 4, 3, 2, 1, 6,3, 5, 4, 2, 1]
let k =3

let i = 0
let j=0
let res =[]
let ans = []
while(j<arr.length) {
res.push(arr[j])
if(j-i+1<k){
    j++
}
else if (j-i+1==k){
    let str ="";
    let a = Math.min(...res)
    let b = Math.max(...res)
     str = str + a + "  "+ b
     ans.push(str)
     res.shift()
     i++
     j++
}
}

console.log(ans)