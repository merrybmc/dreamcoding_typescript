interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!');
  }
  workFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time!');
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const merrybmc = new FullTimeEmployee();
const bob = new PartTimeEmployee();
merrybmc.workFullTime();
bob.workPartTime();

const bmcAfterPay = pay(merrybmc);
const bobAfterPay = pay(bob);

const obj = {
  name: 'bmc',
  age: 20,
  animal: 'dog',
};

const obj2 = {
  animal: 'dog',
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));
