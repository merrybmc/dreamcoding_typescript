{
  // 📣 Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: number[] = [1, 2, 3, 4];
  const arrNum: Array<number> = [1, 3, 4];

  // readonly 파라미터의 값을 조작할 수 없고 읽기 전용으로만 가능
  function printArray(fruits: readonly string[]) {
    console.log(fruits);
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
  }

  printArray(fruits);

  // 📣 Tuple -> interface, type alias, class
  // 서로 다른 타입의 값을 가질 수 있는 배열
  // 사용하는 것을 권장하지 않음 💩
  // 인덱스로 값을 접근하여 출력하는게 가독성이 떨어짐
  // react의 useState hook과 유사
  let student: [string, number];
  student = ['name', 123];
  console.log(student);
  console.log(student[0]);
  console.log(student[1]);

  const [name, age] = student;
}
