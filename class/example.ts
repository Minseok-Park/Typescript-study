class Person {
  // readonly => 초기화 되는 영역에서만 값을 세팅 할 수 있음
  public readonly name: string = "Mark";
  private readonly country: string = "Korea";

  public constructor(private _name: string, private age: number) {
    this.country = "Korea";
  }
}

const p1: Person = new Person("Mark", 39);
console.log(p1.name); // getter 로 구현
