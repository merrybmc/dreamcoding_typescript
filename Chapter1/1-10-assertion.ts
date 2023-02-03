{
  /**
   * Type Assertions 💩
   */

  // 📣 case 1
  function jsStrFunc(): any {
    // return 'hello';
    return 2;
  }
  const result = jsStrFunc();

  console.log('0_', result);
  console.log('1_', result.length);
  console.log('2_', (<string>result).length);
  console.log('3_', (result as string).length);

  // 📣 case 2
  const wrong: any = 5;
  console.log('4_', wrong);
  //   console.log((wrong as Array<number>).push(1)); 💩

  // 📣 case 3
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  //   numbers!.push(2);
  console.log('5_', numbers);
}
