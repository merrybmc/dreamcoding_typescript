/**
 * calculator
 */
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command, num1: number, num2: number): number {
  //   if (command === 'add') {
  //     return num1 + num2;
  //   } else if (command === 'substract') {
  //     return num1 - num2;
  //   } else if (command === 'multiply') {
  //     return num1 * num2;
  //   } else if (command === 'divide') {
  //     return num1 / num2;
  //   } else if (command === 'remainder') {
  //     return num1 % num2;
  //   }
  switch (command) {
    case 'add':
      return num1 + num2;
    case 'substract':
      return num1 - num2;
    case 'multiply':
      return num1 * num2;
    case 'divide':
      return num1 / num2;
    case 'remainder':
      return num1 % num2;
    default:
      throw new Error('unknown command');
  }
}

console.log(calculate('add', 1, 3));
console.log(calculate('substract', 3, 1));
console.log(calculate('multiply', 4, 2));
console.log(calculate('divide', 4, 2));
console.log(calculate('remainder', 5, 2));
