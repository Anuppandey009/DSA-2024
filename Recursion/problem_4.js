
// to check if the Number is palindrome or not 

function isPalindrome(num){
  let str = num.toString();

  return checkPalindrome(str,0,str.length-1);
  function checkPalindrome(str,start, end){
    if(start>=end){
        return true;
    }
    if(str[start]!=str[end]){
        return false;
    }
    return checkPalindrome(str,start+1,end-1);
  }
  
}
let res =isPalindrome(556325)
console.log(res) 