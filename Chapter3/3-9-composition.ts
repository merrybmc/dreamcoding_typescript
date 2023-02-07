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

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 15; // instance (object) level

    public constructor(coffeeBeans: number, private milk: milkFrother, private sugar: SugarProvider) {
      this.coffeeBeans = coffeeBeans;
    }

    // static makeMachine(coffeeBeans: number): CoffeeMachine {
    //   return new CoffeeMachine(coffeeBeans);
    // }

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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 우유 거품기
  class MilkSteamer implements milkFrother {
    private SteamMilk(): void {
      console.log('Steaming milk...');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.SteamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class FancyMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('fancy steaming some milk...');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class ColdMilkSteamer implements milkFrother {
    private steamMilk(): void {
      console.log('cold steaming some milk...');
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements milkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 설탕 제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from candy');
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      this.getSugar();
      return {
        ...cup,
        hasSugar: true,
      };
    }
  }

  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log('Getting some sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // class CaffeLatteMachine extends CoffeeMachine {
  //   constructor(beans: number, private readonly serialNumber: string, private milk: milkFrother) {
  //     super(beans);
  //   }
  //   private steamMilk(): void {
  //     console.log('Steaming milk...');
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     return this.milk.makeMilk(coffee);
  //   }
  // }

  // class SweetCoffeeMaker extends CoffeeMachine {
  //   getSugar() {
  //     console.log('Getting some sugar');
  //   }
  //   constructor(private beans: number, private sugar: SugarProvider) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     this.getSugar();
  //     return this.sugar.addSugar(coffee);
  //   }
  // }

  // class SweetCaffeLatteMachine extends CoffeeMachine {
  //   constructor(private beans: number, private milk: milkFrother, private sugar: SugarProvider) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     const sugarAdded = this.sugar.addSugar(coffee);
  //     return this.milk.makeMilk(sugarAdded);
  //   }
  // }

  // class SweetCaffeLatteMachine extends CoffeeMachine {
  //   constructor(private beans: number, private milk: milkFrother, private sugar: SugarProvider) {
  //     super(beans);
  //   }
  //   makeCoffee(shots: number): CoffeeCup {
  //     const coffee = super.makeCoffee(shots);
  //     const sugarAdded = this.sugar.addSugar(coffee);
  //     return this.milk.makeMilk(sugarAdded);
  //   }
  // }

  const milkMaker = new MilkSteamer();
  const fancyMilkSteamer = new FancyMilkSteamer();
  const coldMilkSteamer = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // const sweetCandyMachine = new SweetCoffeeMaker(12, candySugar);
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);

  // const sweetMachine = new SweetCoffeeMaker(12, sugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

  // const latteMachine = new CaffeLatteMachine(12, '서울우유전용', milkMaker);
  const latteMachine = new CoffeeMachine(12, milkMaker, noSugar);

  // const coldLatteMachine = new CaffeLatteMachine(12, '서울우유전용', coldMilkSteamer);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkSteamer, sugar);

  // const sweetLatteMachine = new SweetCaffeLatteMachine(12, milkMaker, candySugar);
  const sweetLatteMachine = new CoffeeMachine(12, fancyMilkSteamer, sugar);
}
