//The results of a game tournament are scored as a string containing 'W' (win) and 'L' (loss).
//Each win raises your score by 1, whereas each loss lowers it by 1.
//Write a program that finds the highest your score was at any point in the tournament.
//Eg. 'WWWL' -> 3
//Eg. 'WLWW' -> 2
let W_count = 0
let L_count = 0
// function solution(string) {
//   const newString = string.split('')
//   // return newString.filter(s => s == 'W').length - newString.filter(s => s == 'L').length
//   for (let i = 0; i <= newString.length; i++) {
//     if (newString[i] == 'W') {
//       W_count++
//     }
//     else {
//       const lastIndex = newString.length - 1

//       W_count = 0

//     }
//     return W_count - L_count
//   }
// }
// console.log(solution('WLWW'))
function solution(string) {
  const str = string.split('')
  let w_counter = 0
  let l_counter = 0
  let z = []
  console.log(str)
  for (let i = 0; i < str.length; i++) {
    console.log("------>" + str[i])
    if (str[i] == 'W') {
      console.log("1-----------")
      w_counter++
    }
    else {
      console.log("2-----------" + str.length)
      let arraylength = str.length
      console.log("2-----arraylength------" + arraylength)
      let lastindex = arraylength - 1
      console.log("2-----lastindex------" + lastindex)
      if (i < lastindex)
        w_counter = 0
    }
    console.log(w_counter)
  }

  console.log("counter values" + w_counter + "-" + l_counter)

  return w_counter - l_counter
  // console.log(w_counter)
  // console.log(z)
  // return s
}

console.log(solution('WLWW'));