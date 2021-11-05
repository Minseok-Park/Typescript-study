interface Person3 {
  name: string;
  age?: number;
  // indexable 타입!!
  [index: string]: any;
}

function hello3(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p31: Person3 = {
  name: "Mark",
  age: 39,
};

const p32: Person3 = {
  name: "Anna",
  // [index: string] => systers,  : any => ["Sung", "Chan"]
  systers: ["Sung", "Chan"],
};

const p33: Person3 = {
  name: "Bokdaengi",
  father: p31,
  mother: p32,
};

hello3(p33);
