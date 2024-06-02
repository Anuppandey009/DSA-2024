// SubSequence of a string 


let str ="anup"

let arr = str.split("")
let ans =[]
function subarr(res,arr,index){
if(index== arr.length){
    ans.push(res)
    return
}
subarr(res,arr,index+1)
subarr(res.concat(arr[index]),arr,index+1)

}

subarr([],arr,0)

console.log(ans);