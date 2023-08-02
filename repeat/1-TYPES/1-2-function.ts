// JavaScript
function jsAdd(num1, num2) {
  return num1 + num2;
}

// TypeScript
function tsAdd(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(tsAdd(1, 2));

// JavaScript
function jsFetchNum(id) {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

// TypeScript
function tsFetchNum(id: string): Promise<number> {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

// JavaScript => TypeScript

// Optional Parameter

function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  console.log(lastName);
}

printName('Cho', 'Byeong Min');
printName('Cho');
printName('Cho', undefined);

// Default Parameter
function printMessage(message: string = 'default Message') {
  console.log(message);
}
printMessage();

// Rest Parameter
function addNumbers(...num: number[]): number {
  return num.reduce((a, b) => a + b);
}

let a: number = addNumbers(1, 2, 3, 4, 5);
console.log(a);
