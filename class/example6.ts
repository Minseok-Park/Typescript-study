abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}

class Person3 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const p = new Person3();
p.setName("dd");
