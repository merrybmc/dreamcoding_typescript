// 함수의 이름은 결국 변수이기 때문에 아규먼트로도 전달할 수 있을까요?
// 또는 리턴값으로도 전달할 수 있을까요?
// 답은 '네'입니다!

function add(a, b) {
  // 이 리턴이 함수를 끝낼 때
  return a + b;
}

let x = 10;
let y = 20;

// 파라미터 (영어로) parameter
// 인자 (한글)

let result = add(x, y);

let addFunction = add;
console.log(addFunction(1, 2));

console.log(result);

// console.log(add(x, y));

// add(x, y);

// // 1. 함수를 아규먼트로 전달
// // 아래와 같이 아규먼트 전달된 함수를 '콜백함수'라고 부릅니다.

function addAndMultiply(x, y, z) {
  let sum = z(x, y) * z(x, y);
  return sum;
}

addAndMultiply(1, 2, add);

let x = 'javaScript';

x.subString(3, 2);
