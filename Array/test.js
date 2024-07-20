let arr = [10, 20, 15, 2, 23, 90, 67]



    let n = arr.length
    let low = 0
    let high = n - 1

   while(low<=high){
    let mid = ~~((low+high)/2)

    if((mid==0 || arr[mid]>=arr[mid-1])&&(mid==n-1 || arr[mid]>=arr[mid+1])){
        console.log("srr>>>>> ", arr[mid])
        return arr[mid]
    }
 else if(arr[mid-1]>arr[mid]){
    high=mid-1
  }
  else{
    low = mid+1
  }
   }