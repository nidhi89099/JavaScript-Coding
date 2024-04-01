//Create a function that reverses an array
function reverse(arr) {
  return arr.reverse().sort()
}
console.log(reverse([7, 6, 8]))
console.log(reverse([7, 6, 8, 7, 8, 0]))
console.log(reverse([7, 6, 8, 'z', 'c', 'a']))

//Create a function that filters out negative numbers
function filterNegativeNumbers(arr) {
  return arr.filter(s => s >= 0)
}
console.log(filterNegativeNumbers([2, 6, -7, -1, 8, 0]))

// //Remove the spaces found in a string
function removeSpaces(str) {
  return str.split('').map(s => s.trim()).join('')
}
console.log(removeSpaces("Remove the spaces found in a string"))

//Return a Boolean if a number is divisible by 10
function divisible(number) {
  if (number % 10 == 0) {
    return true
  }
  else
    return false
}
console.log(divisible(233))

//Return the number of vowels in a string /[aeiou]/gi,
const arr = []
let count = 0;
function vowels(str) {
  const v = ['a', 'e', 'i', 'o', 'u']
  const str1 = str.split('')
  for (let i = 0; i < str1.length; i++) {
    if (v.includes(str[i].toLowerCase())) {
      count++
    }
  }
  return count
}
console.log(vowels('Return the number of vowels in a string'))
//solution 2
function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const vowelCount = str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
  return vowelCount;
}

const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(vowelCount); // Output: 3


