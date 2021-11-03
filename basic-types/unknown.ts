// unknown => any와 짝으로 any 보다 type-safe한 타입이다!!
// 아무거나 할당 가능!! 타입의 유형을 좁히거나
// 타입을 확정해주지 않으면 다른 곳에 할당 불가!
// unknown 타입을 사용하면 runtime error를 줄일 수 있다!
declare const maybe: unknown;

if (typeof maybe === "number") {
  const aNumber: number = maybe;
}

if (maybe === true) {
  const aBoolean: boolean = maybe;

  // const aString: string = maybe;
}

if (typeof maybe === "string") {
  const aString: string = maybe;

  // const aBoolean: boolean = maybe;
}
