// any => 어떤 타입이어도 상관 없는 타입
// 최대한 쓰지 않는 것이 핵심! => 컴파일 타임에 타입 체크가
// 정상적으로 이루어지지 않기 때문!

function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
  const a: number = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({ num: 0 });
//c.indexOf("0");
