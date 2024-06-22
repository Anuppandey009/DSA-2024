/*
Print all combinations of balanced parentheses
Given a number n, the task is to generate all possible n pairs of balanced parentheses.
Input: n=1
Output: {}
Explanation: This the only sequence of balanced parenthesis formed using 1 pair of balanced parenthesis.

Input : n=2
Output: {}{}
{{}}
Explanation: This the only two sequences of balanced parenthesis formed using 2 pair of balanced parenthesis.
*/

let n = 3
let close =3
let open =3
let res =[]

function generateParenthesis(open,close,str,res){
    if(open ==0 && close==0){
        res.push(str)
        return
    }
    if(open!=0){
        generateParenthesis(open-1,close,str+"(",res)
    }
    if(close>open){
        generateParenthesis(open,close-1,str+")",res)
    }
}
generateParenthesis(open,close,"",res)
for(let x of res){
    console.log(x)
}