/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.toUpperCase().replace(/[\.,?! ]/g, "").split('').reverse().join('') === str.toUpperCase().replace(/[\.,?! ]/g, "")) {
    return true;
  }
  else {
    return false
  }
}

console.log(isPalindrome('A man a plan a canal Panama!'))