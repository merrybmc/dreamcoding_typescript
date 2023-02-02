{
  // JavaScript 💩
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  // num1 = number 타입
  // num2 = number 타입
  // 끝에 number = number를 리턴해줄 것이다.
  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 💩
  function jsFetchNum(id) {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ✨
  function tsFetchNum(id: string): Promise<number> {
    // code...
    // code...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript ✨
  // 📣 Optional parameter
  // 성과 이름을 받아서 전체 이름을 출력하는 함수
  function printName(firstName: string, lastName?: string) {
    console.log(firstName + ' ' + lastName);
  }
  printName('Steve', 'Jobs');

  // 성만 출력하려고 할 때 오류 발생
  printName('Elice');

  // 성만 출력하고 싶을 때

  // 1안 ✨
  // 함수의 해당 parameter에 옵셔널 (?) 추가
  // 그러면 값을 전달받을 수도 있고 전달받을 수 없을 수도 있어짐

  // 2안 ✨
  // 두 번째 인자에 undefined 전달
  printName('Anna', undefined);

  // 📣 Default parameter
  // 메세지를 전달하면 메세지를 출력하는 함수
  // 함수의 파라미터에 아무런 값을 넣지 않을 경우 Default message 출력
  // 함수의 파라미터에 옵셔널 체이닝을 넣으면 아무런 값을 넣지 않을 때 undefined 출력
  function printMessage(message: string = 'Default message') {
    console.log(message);
  }

  printMessage('Hello World');
  printMessage();

  // 📣 Rest parameter
  // 파라미터로 받은 모든 수를 더한 다음 number로 리턴
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
