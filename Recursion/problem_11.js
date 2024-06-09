//Program to print first n Fibonacci Numbers

function fib(n) {
    if(n==0){
        return 0
    }
   else if(n==1){
        return 1
    }
    else{
        return fib(n-2)+fib(n-1)
    }
}

for(let i =0;i<4;i++){
    let ans = fib(i)
    console.log(ans)
}
