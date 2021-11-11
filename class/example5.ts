class Parent {
  constructor(protected _name: string, private _age: number) {}

  public print(): void {
    console.log(`이름 ${this._name} 이고, 나이는 ${this._age} 입니다`);
  }

  protected printName(): void {
    console.log(this._name, this._age);
  }
}

// const pa = new Parent("Mark", 39);
// pa.print();

class Child extends Parent {
  public gender = "male";

  constructor(age: number) {
    super("Mark Jr", age);
    this.printName();
  }
}

const c = new Child(1);
c.print();
