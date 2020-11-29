// boolean
const bool : boolean = false;

// number
const num1: number = 1;
const num2: number = 1.2;

// string
const str: string = 'some string';
const tStr = `some template string`;

// undefined
const und: undefined = undefined;

// null
const n: null = null;

// array
const array1: Array<number> = [1, 2, 3, 4];
const array2: number[] = [1, 2, 3, 4];
const array3: [string, number] = ['string', 1];
let array4: [number, string];
array4 = [1, 'string'];

// any
let someNumber: any = 1;
let someBool: any = false;
let someString: any = 'string'

someNumber = true;
someBool = 'string';
someString = 1;

// enum
const enum Directions {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

console.log(Directions.Down);

const enum Directions2 {
  Up,        // 0
  Down = 2,  // 2
  Left = 8,  // 8
  Right      // 9
}

console.log(Directions2.Right);

// object
//1
type Person1 = {name: string, age: number, nickName: string};
const user1: Person1 = {
  name: 'Edward', age: 24, nickName: 'sezardino'
}

const admin1: Person1 = {
  name: 'Edward', age: 24, nickName: 'sezardino'
}

//2
type Person2 = {name: string, age: number, nickName?: string, someAct?: () => string}
const user2: Person2 = {
  name: 'Edward', age: 24, nickName: 'sezardino'
}

const admin2: Person2 = {
  name: 'Edward', age: 24, someAct(): string { return 'action'}
}

//functions
// arguments
const createPassword1 = (name: string, age: number = 99): string => `${name}${age}`;
const createPassword2 = (name: string, age?: number | string): string => `${name}${age}`;

console.log(createPassword1('Edward', 24));
console.log(createPassword1('Edward'));
console.log(createPassword2('Edward', '24'));
console.log(createPassword2('Edward'));

// rest
const getSkills = (name: string, ...skills: Array<string>): string => `My name is ${name}, my skills are ${skills.join()}`

console.log(getSkills('Edward', 'JS', 'HTML', 'CSS', 'TS', 'React'));

//classes

class User1 {
  name: string;
  age: number;
  nickName: string

  constructor() {
    this.name = 'Edward';
    this.age = 24;
    this.nickName = 'Sezardino'
  }
}

class User2 {
  name: string;
  age: number;
  nickName: string = 'Sezardino'

  constructor(name: string, age: number, nickName?: string) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
  }
}

const userEdward1 = new User2('Edward', 24, 'Sezardino')
const userEdward2 = new User2('Edward', 24)

console.log(userEdward1);

class User3 {
  public name: string;
  private age: number;
  protected nickName: string
  readonly pass: number

  constructor(name: string, age: number, nickName: string, pass: number) {
    this.name = name;
    this.age = age;
    this.nickName = nickName;
    this.pass = pass;
  }
}

const userEdward3 = new User3('Edward', 24, 'Sezardino', 1234)

//userEdward2.name; // Edward
//userEdward2.age; // available only in User3
//userEdward2.nickName; //available only in User3 class and its subclass
//userEdward2.pass = 42; //readonly

//minimization class properties

class User4 {
  constructor(
    public name: string,
    private age: number,
    protected nickName: string,
    readonly pass: number,
  ) {}
}

//private properties

class User5 {
  constructor(
    private age: number,
  ) {}
  setAge(age: number) {
    this.age = age;
  }
  // set myAge(age: number) {
  //   this.age = age;
  // }
}

const someUser = new User5(24)

// someUser.myAge = 25;
someUser.setAge(31)

// inheritance

class Inh {
  static secret = 12345
  constructor(public name: string) {}

  getPass() {
    return this.name + Inh.secret;
  }
}

// abstract class

abstract class absUser {
  constructor(public name: string, public age: number) {}

  abstract greeting(): string
}

namespace Interface {
  // interface

  interface UserInterface1 {
    name: string,
    age?: number
  }

  interface UserInterface2 {
    readonly name: string,
    age?: number
  }

  interface UserInterface3 {
    name: string,
    age: number,
    [propName: string]: any
  }

  interface UserInterface4 {
    name: string,
    age: number,
  }

  class User implements UserInterface4 {
    name: string = 'Edward';
    age: number = 24;
    nickName: string = 'Sezardino';
  }

  interface User {
    name: string;
    age: number;
  }

  interface Admin extends User {
    getPass(): string
  }
}
