/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

*/

function countVowels(str) {
  const vovels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let count = 0
  str.split('').forEach(x => {
    if (vovels.includes(x))
      return count++
  })
  return count++
}

console.log(countVowels("Happlyaeiou"))