{
  function checkNotNullBad(arg: number | null): number {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const result = checkNotNullBad(5);
  console.log(result);
  console.log(checkNotNullBad(null));

  //   any를 쓰면 타입을 보장받지 못한다.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }
  // any로 반환된걸 받음
  // result2 에 대한 타입에 대한 정보를 알 수 없기 때문에 안전하지가 않다
  // any를 쓰는 것은 좋지 않다
  const result2 = checkNotNullAnyBad(123);

  //   함수의 파라미터에 어떤 값이 전달되던지 null이 아니면 똑같은 타입으로 반환
  function checkNotNull<GENERIC>(arg: GENERIC | null): GENERIC {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
