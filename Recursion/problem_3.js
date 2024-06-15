// Find the mean of an array

let array =[1,2,3,4,5]
function mean(sum,array, index){
    if(index == array.length) {
        return sum/array.length;
    }
    return mean(sum+array[index],array,index+1)
}

let res =mean(0,array,0)

console.log(res)
