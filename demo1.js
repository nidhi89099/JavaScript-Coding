//We need a function that can transform a string into a number. What ways of achieving this do you know?
function stringToNumber(str) {
  //return Number(str)
  //return  parseInt(str)
  return parseFloat(str)

}
console.log(stringToNumber("3.14"))
console.log(stringToNumber("114"))