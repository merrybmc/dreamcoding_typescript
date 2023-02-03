/**
 * calculator
 */

function calculate(command: string, num1: number, num2: number) {
  if (command === 'add') {
    return num1 + num2;
  } else if (command === 'substract') {
    return num1 - num2;
  } else if (command === 'multiply') {
    return num1 * num2;
  } else if (command === 'divide') {
    return num1 / num2;
  } else if (command === 'remainder') {
    return num1 % num2;
  }
}

console.log(calculate('add', 1, 3));
console.log(calculate('substract', 3, 1));
console.log(calculate('multiply', 4, 2));
console.log(calculate('divide', 4, 2));
console.log(calculate('remainder', 5, 2));
