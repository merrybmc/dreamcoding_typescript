{
  /*
   * Type Aliases
   */

  type Text = string;

  // name은 string 타입
  const name: Text = 'elice';
  const address: Text = 'korea';

  type Num = number;
  const phoneNum: Num = 8201012345678;

  type Student = {
    name: string;
    age?: number;
  };

  const student1: Student = {
    name: 'elice',
    age: 12,
  };

  const student2: Student = {
    name: 'minsu',
  };

  /*
   * String Literal Types
   */

  // 문자열 타입 정의
  type Name = 'name';
  let MyName: Name;
  MyName = 'name';

  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;
}
