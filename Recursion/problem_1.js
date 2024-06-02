
// Sort th aray using recursion

let arr =[2,3,7,6,4,5,9]


function sort (arr){
  if(arr.length<=1){
    return
  }
  let temp = arr[arr.length-1]
  arr.pop()
  sort(arr)
  insert(arr, temp)
}

function insert(arr, temp){
  if(arr.length ==0 || arr[arr.length-1]<=temp){
    arr.push(temp)
    return
  }

  let value = arr[arr.length-1]
  arr.pop()
  insert(arr, temp)
  arr.push(value)
 
}

sort(arr)
console.log(arr)