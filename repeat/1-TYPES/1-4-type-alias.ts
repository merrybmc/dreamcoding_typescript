/** Type alias
 * 새로운 타입을 정의할 수 있다.
 */

type Text = string;
// Text = 문자열 타입으로 string을 대체해서 사용할 수 있다.

const name: Text = 'Hello World';
console.log(name);

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: 'byeong Min',
  age: 29,
};

console.log(student);

// String Literal Types
type Name = 'name';

const byeongMin: Name = 'name';
console.log(byeongMin);

type Bool = true;
const isCat: Bool = true;
