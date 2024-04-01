// given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
function invert(array) {
  return array.map(num => num * -1); //go through each number in the array using map method
}
console.log(invert([1, -9, 3]));

//Convert a Number to a String
function numTostring(num) {
  return typeof (String(num))
}
console.log(numTostring(234))
