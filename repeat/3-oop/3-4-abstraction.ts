{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommertialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // 정보 은닉
  // public === default 외부 접근 가능
  // private === 외부 접근 불가능
  // protected === 자식 클래스만 접근 가능
  class CoffeeMachine implements CoffeeMaker, CommertialCoffeeMaker {
    // class level은 오브젝트마다 새로 생성되지 않는다.
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
    }

    clean(): void {
      console.log('cleaning the machine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CommertialCoffeeMaker = CoffeeMachine.makeMachine(32);
  //   maker.clean();
  //   maker.fillCoffeeBeans(32);
  //   console.log(maker);

  //   let coffee = maker.makeCoffee(2);
  //   console.log(coffee);

  //   maker.grindBeans(1);
  //   maker.grindBeans(1);
  //   console.log(maker);

  //   maker.preheat();
  //   let coffee = maker.extract(2);
  //   console.log(coffee);

  class AmateurUser {
    constructor(private machine: CoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee();
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: CommertialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(14);
      this.machine.clean();
    }
  }

  const amateur = new AmateurUser(maker);
  amateur.makeCoffee();

  const pro = new ProBarista(maker);
  //   pro.makeCoffee(1);

  //   const proMaker = ProBarista();
  //   proMaker.makeCoffee();

  //   const amaMaker = AmateurUser();
  //   amaMaker.console.log(amaMaker);
}
