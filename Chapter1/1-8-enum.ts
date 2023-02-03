{
  /**
   * Enum
   * 여러가지의 관련된 상수 값들을 한 곳에 모아서 정의
   * 타입스크립트에선 enum을 쓰지 않는 것이 좋다.
   * 타입 추론이 어려움
   */

  // JavaScript 💩
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  console.log(dayOfToday);

  // TypeScript ✨
  // 타입스크립트에서 enum보단 union 타입을 사용 권장
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday = 1, // 1부터 출력하고 싶으면 이렇게, 0부터 출력하고 싶으면 아무것도 넣지 않기, 문자열도 할당 가능 ex) Monday = 'monday'
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days);
  console.log(Days[1]);
  console.log(Days.Wednesday);

  const day = Days.Saturday;
  console.log(day);

  // 타입스크립트에서 enum의 문제점
  let day2: Days = Days.Friday;
  day2 = Days.Friday;
  day2 = 20;
  console.log('day2', day2);

  let dayOfWeek: DaysOfWeek = 'Monday';
  //   dayOfWeek = 'merrybmc'; 💩
}
