//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!
//The function takes a name as its only argument, and returns one of the following strings:
//name.split()
function selectName(name) {
  const newName = name.split('')
  console.log(newName)
  if (newName[0] == 'R' || newName[0] == 'r') {
    return 'you are playing banjo!'
  }
  else {
    return 'not playing banjo , you can play any other instrument'
  }

}
console.log(selectName("yhual"))
