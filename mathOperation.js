//Your task is to create a function that does four basic mathematical operations.
//The function should take three arguments - operation(string / char), value1(number), value2(number).('+', 4, 7)-- > 11
//The function should return result of numbers after applying the chosen operation.
function calculation(op, num1, num2) {
  if (op == '-') {
    return num1 - num2
  }
  else if (op == '+') {
    return num1 + num2
  }
  else if (op == '*') {
    return num1 * num2
  }
  else {
    return num1 / num2
  }
}
console.log(calculation('/', 7, 4))