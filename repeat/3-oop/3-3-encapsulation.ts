{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보 은닉
  // public === default 외부 접근 가능
  // private === 외부 접근 불가능
  // protected === 자식 클래스만 접근 가능
  class CoffeeMaker {
    // class level은 오브젝트마다 새로 생성되지 않는다.
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffe beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  // public이라 접근 가능
  // CoffeeMaker.BEANS_GRAMM_PER_SHOT;

  const maker = CoffeeMaker.makeMachine(21);
  console.log('maker', maker);
  //   maker.coffeeBeans = 3;
  //   console.log('maker', maker);

  //   const coffee = maker.makeCoffee(2);
  //   console.log(coffee);

  maker.fillCoffeeBeans(20);

  console.log(maker);

  const maker2 = CoffeeMaker.makeMachine(3);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }
  let name = new User('조', '병민');
  console.log(name.fullName);
  console.log(name.age);
  name.age = 6;
  console.log(name.age);
  console.log(name.fullName);
}
