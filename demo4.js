//Can you write a function in JavaScript to reverse the order of words in a given string?
function reverse(str) {
  return str.split('').reverse().join('')
}
console.log(reverse('hello world'))
//Can you write a function in JavaScript to remove duplicate elements from an array?
function removeDuplicate(arr) {
  //return [...new Set(arr)];
  return Array.from(new Set(arr))
}
console.log(removeDuplicate([2, 6, 2, 4, 68, 9]))

// Can you write a function in JavaScript to merge two objects without overwriting existing properties?
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 5 };
const mergedObj = mergeObjects(obj1, obj2);

console.log(mergedObj); // Output: { a: 1, b: 2, c: 4 }

//Can you write a function in JavaScript to get the current date in the format “YYYY-MM-DD”?
const currentDate = () => new Date().toISOString().split('T')[0];
console.log(currentDate())
console.log(new Date())

//Can you write a function in JavaScript to calculate the cumulative sum of an array?
function cumulative(num) {
  return num.reduce((accumlator, number) => accumlator + number)
}
console.log(cumulative([1, 2, 2, 3, 4, 5]))

//Can you write a function in JavaScript to split an array into chunks of a specified size?
function chunks() {

}
chunks([])

















