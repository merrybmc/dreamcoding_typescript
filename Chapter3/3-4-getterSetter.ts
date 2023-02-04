{
  class User {
    // private firstName: string;
    // private lastName: string;
    // fullName: string;

    // fullName에 접근할 때 마다 새로운 값 정의
    get fullName(): string {
      //   return this.firstName + this.lastName;
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge: number = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('wrong age');
      }
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      //   this.fullName = firstName + lastName;
    }
  }

  const user1 = new User('merry', 'bmc');
  console.log(user1);
  console.log(user1.fullName);
  user1.age = 6;
}
