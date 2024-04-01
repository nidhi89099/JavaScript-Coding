//Convert number to reversed array of digits
/* const array = []
 function reversedArray(num){
const newNum = num.split('')
   for (let i = newNum.length; i>=0; i--)
{
array.push(newNum[i])
}
return array
 }
 console.log(reversedArray("1234")) */


/*function reversedArray(num) {
  const newNum = num.split('')
  const array = newNum.reverse()
  return array
}
console.log(reversedArray("6789"))*/
/*function reversedArray(num) {
    const newNum = num.split('').reverse()
    return newNum
}
console.log(reversedArray("3456"))*/
function reversedArray(num) {
  const newNum = String(num).split('').reverse().map(Number)
  console.log(typeof (newNum))
  return newNum
}
console.log(reversedArray(6789))