// never => 모든 타입의 subtype에 해당
// never에는 그 어떤 것도 할당이 불가능
// any 조차도 never에게 할당 불가
// 잘못된 타입을 넣는 실수를 막고자 할 때 사용

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

declare const a: string | number;

if (typeof a !== "string") {
  a;
}
