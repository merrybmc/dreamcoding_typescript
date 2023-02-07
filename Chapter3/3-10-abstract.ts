{
  /**
   * public 전역
   * private 스코프 내에서만
   * protected 클래스를 상속한 자식 클래스에게만
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 15; // instance (object) level

    public constructor(coffeeBeans: number) {
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

    clean(): void {
      console.log('cleaning the machine...');
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

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(beans: number, private readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log('Steaming milk...');
    }
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines = [new CaffeLatteMachine(16, '1234'), new SweetCoffeeMaker(16), new CaffeLatteMachine(16, '2345'), new SweetCoffeeMaker(16)];

  machines.forEach((machine) => {
    console.log('----------------------');
    machine.makeCoffee(1);
  });

  const machines2: CoffeeMaker[] = [new CaffeLatteMachine(16, '1234'), new SweetCoffeeMaker(16), new CaffeLatteMachine(16, '2345'), new SweetCoffeeMaker(16)];

  machines2.forEach((machine) => {
    console.log('----------------------');
    machine.makeCoffee(1);
  });
}
