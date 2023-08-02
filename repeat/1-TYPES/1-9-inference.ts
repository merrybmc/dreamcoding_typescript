let text = 'hello';

// 파라미터는 타입을 명시해주어야 한다.
function print(message: string) {
  console.log(message);
}

print('hello');

// 작성하는 습관을 들이는게 좋다.
function add(x: number, y: number): number {
  return x + y;
}

const result = add(1, 2);
console.log(result);
