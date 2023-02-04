{
  /**
   * 절차지향적 커피 만들기
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;
  let coffeeBeans: number = 15;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      // key와 value가 동일하다면 shots으로 생략 가능
      // 원래 코드는 shots : shots
      hasMilk: false,
    };
  }

  console.log(makeCoffee(2));
  console.log(coffeeBeans);
}
