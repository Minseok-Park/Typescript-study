// compile 타임에만 필요하다!!
interface Person1 {
  name: string;
  age: number;
}

function hello(person: Person1): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person1 = {
  name: "Mark",
  age: 39,
};

hello(p1);
