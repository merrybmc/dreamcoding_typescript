{
  // number
  const num: number = 10;

  // string
  const str: string = 'Hello World';

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined;
  age = undefined;
  age = 10;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let user: null; // 💩
  let person: string | null;

  // unknown 💩 무엇이든지 담을 수 있는 변수, 가능하면 쓰지말 것
  let notSure: unknown = 0;
  notSure = 'Hello unknown';
  notSure = true;

  // any 💩 무엇이든지 담을 수 있는 변수2
  let anything: any = 0;
  anything = 'Hello any';

  // void 아무런 값도 리턴하지 않을 때, 주로 함수에서 사용
  function print() {
    console.log('hello ');
  }

  // never
  // 예상치못한 에러가 발생했을 때 호출할 수 있는 함수
  // 발생한 에러 메세지를 서버로 보내서 로그를 남김
  // 리턴하는 값이 없다, 함수에만 선언
  function throwError(message: string): never {
    throw new Error(message);
  }

  // object
  // 원시 타입을 제외한 모든 오브젝트 타입을 할당 가능
  // 이 타입도 쓰지 않는 것이 좋음 💩
  let obj: object;
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({ name: 'elice' });
  acceptSomeObject({ animal: 'rabbit' });
}
