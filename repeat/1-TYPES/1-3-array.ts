// Array

const fruits: string[] = ['tomato', 'banana'];
// console.log(fruits);

const scores: Array<number> = [1, 2, 3, 4];
// console.log(scores);

// 함수 내부에서 변경 불가
// object의 불변성을 보장해주어야 하기 때문에 자주 쓰인다.
function printArray(fruits: readonly string[]) {
  fruits[0] = 'apple'; // 변경 불가능
  console.log(fruits);
}
printArray(fruits);

// Tuple
// 사용하는 것을 권장하지 않는다.
// index로 접근하는게 가독성이 떨어진다.
// 나중에 interface, type alias, class로 대체해서 사용된다.
let students: [string, number];
students = ['hello', 123];
console.log(students[0]); // hello
console.log(students[1]); // 123
