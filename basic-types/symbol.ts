// Symbol => 고유하고 수정 불가능한 값으로 만들어줌
// 접근을 제어하는데 쓰는 경우가 많다!

console.log(Symbol("foo") === Symbol("foo"));

const sym = Symbol();

const obj = {
  [sym]: "value",
};

console.log(obj[sym]);
