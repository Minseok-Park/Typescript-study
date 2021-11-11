class Person1 {
  private static CITY = "Seoul";
  public hello() {
    console.log("안녕하세요?", Person1.CITY);
  }
  public change() {
    Person1.CITY = "LA";
  }
}

const p11 = new Person1();
const p2 = new Person1();

p11.hello();
p11.change();
p2.hello();
