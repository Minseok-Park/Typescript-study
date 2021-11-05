// name은 있어야 하지만 age는 없어도 되는 경우 key값 뒤에
// ?를 붙여준다
interface Person2 {
  name: string;
  age?: number;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p2: Person2 = {
  name: "Mom",
};

hello2(p2);
