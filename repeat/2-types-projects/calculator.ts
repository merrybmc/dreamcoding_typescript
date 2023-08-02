// Let's make a calculator

// Union type
type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

console.log(calculate('add', 1, 3));
console.log(calculate('substract', 3, 1));
console.log(calculate('multiply', 4, 2));
console.log(calculate('divide', 4, 2));
console.log(calculate('remainder', 5, 2));

function calculate(command: Command, num1: number, num2: number): number {
  if (command === 'add') return num1 + num2;
  else if (command === 'substract') return num1 - num2;
  else if (command === 'multiply') return num1 * num2;
  else if (command === 'divide') return num1 / num2;
  else if (command === 'remainder') return num1 % num2;
  else {
    throw new Error('Unknown command');
  }
}

function calculate2(command: Command, num1: number, num2: number): number {
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
      throw new Error('Unknown command');
  }
}

console.log(calculate2('add', 1, 3));
console.log(calculate2('substract', 3, 1));
console.log(calculate2('multiply', 4, 2));
console.log(calculate2('divide', 4, 2));
console.log(calculate2('remainder', 5, 2));
