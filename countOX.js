//13)Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// const a = []
function count(string) {
  const newString = string.toLowerCase().split('')
  return newString.filter(s => s === 'x').length === newString.filter(s => s === 'o').length
  //   return true
  // for (let i = 0; i <= newString.length; i++) {
  //   a.push(newString(i))
  //   if (x.length === o.length) {
  //     return true
  //   }
  //   else {
  //     return false
  //   }
}

// const count = str => {
//   str = str.toLowerCase().split('')
//   return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length
// }
console.log(count('xoxoo'))