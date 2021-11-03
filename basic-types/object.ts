// object literal => object type이 아니다!
const person1 = { name: "Mark", age: 39 };

// obejct type을 사용하려면 Object.create를 사용해야 함
// create(o: object | null) => primitive type이 아닌 것을
// 나타내고 싶을 때 사용하는 타입
const person2 = Object.create({ name: "Mark", age: 39 });
