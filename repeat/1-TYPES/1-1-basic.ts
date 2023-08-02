// number;
const num: number = 1;
console.log(num);

//string
const str: string = 'Hello';
console.log(str);

// boolean
const bool: boolean = false;
console.log(bool);

// undefined
let age: number | undefined;

// null
let person: string | null;

// unknown
let notSure: unknown = 0;
console.log(notSure);
notSure = 'hi';
console.log(notSure);
notSure = true;
console.log(notSure);

// any
let anything: any = 0;
anything = 'hello';

// void
function print() {
  console.log('hello');
}

// never
function throwError(message: string): never {
  throw new Error(message);
}

// object
let obj: object;
function acceptSomeObject(obj: object) {}
acceptSomeObject({ name: 'byeongMin' });
acceptSomeObject({ animal: 'dog' });
