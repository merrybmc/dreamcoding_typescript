{
  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });

  const dyasOfToday = DAYS_ENUM.MONDAY; // 0

  // TypeScript
  // 타입스크립트에서 enum 가능한한 쓰지 않는 것이 좋다.
  // 타입스크립트에서의 enum의 문제점은 인덱스 넘버를 할당할 수도 있으며 컴파일 에러가 발생하지 않는다.
  // 타입이 정확하게 보장되지 않는다.
  // enum 대신 union type을 사용하는 것을 권장한다.

  enum DAYS {
    Monday = 'monday',
    Tuesday = 'tuesday',
    Wednesday = 'wednesday',
    Thursday = 'thursday',
    Friday = 'friday',
    Saturday = 'saturday',
    Sunday = 'sunday',
  }

  const day: Days = DAYS.Saturday;

  console.log(day);
}
