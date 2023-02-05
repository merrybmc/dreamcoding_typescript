{
  /**
   * encapsulation
   * public 전역
   * private 스코프 내에서만
   * protected 클래스를 상속한 자식 클래스에게만
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    // 고정되어 있는 값이며 모든 Object 사이에서 공유되는 값은
    // Object를 만들 때마다 중복적으로 데이터가 생성되기 때문에 메모리 낭비 발생
    // 그러므로 static을 붙여주면 class level로 지정
    // static을 쓰면 Object 안에서 this를 쓰지 않고 클래스 이름을 지정
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 15; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('wrong beans number');
      } else {
        this.coffeeBeans += beans;
      }
    }

    grindBeans(shots: number): void {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    preheat(): void {
      console.log('heating up');
    }

    extract(shots: number): CoffeeCup {
      console.log(`pulling...${shots} shots`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      // if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
      //   throw new Error('Not enough coffee beans!');
      // }
      // this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      // return {
      //   shots,
      //   // key와 value가 동일하다면 shots으로 생략 가능
      //   // 원래 코드는 shots : shots
      //   hasMilk: false,
      // };
    }
  }

  const maker = new CoffeeMachine(32);
  let coffee = maker.makeCoffee(2);
  console.log(coffee);
  console.log(maker.coffeeBeans);
  const maker2 = CoffeeMachine.makeMachine(3);
  //   maker.coffeeBeans += 3;
  //   private로 설정하여 임의 조작 불가능
  maker.fillCoffeeBeans(3);

  const maker3: CoffeeMaker = CoffeeMachine.makeMachine(32);
}
