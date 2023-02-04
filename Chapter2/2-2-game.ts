/**
 * Let's make a game
 */
const position = { x: 0, y: 0 };
let x: number = 0;
let y: number = 0;

type Direction = 'up' | 'down' | 'left' | 'right';
function move(command: Direction): void {
  switch (command) {
    case 'up':
      position.y = position.y + 1;
      break;
    case 'down':
      position.y = position.y - 1;
      break;
    case 'left':
      position.x = position.x - 1;
      break;
    case 'right':
      position.x = position.x + 1;
      break;
    default:
      throw new Error('wrong command');
  }
}

console.log(position); // { x: 0, y: 0}
move('up');
console.log(position); // { x: 0, y: 1}
move('down');
console.log(position); // { x: 0, y: 0}
move('left');
console.log(position); // { x: -1, y: 0}
move('right');
console.log(position); // { x: 0, y: 0}
