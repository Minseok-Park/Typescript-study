// 2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우
// 할당이 가능하다 => 반병

class Person {}
class Developer extends Person {
  coding() {}
}
class StartupDeveloper extends Developer {
  burning() {}
}

// tellme 라는 함수, 함수의 인자로 함수(f)가 들어가고
// 이 함수의 형태는 (d:Developer) => Developer 이다.
// Developer를 인자로 받고 Developer를 return 한다!
function tellme(f: (d: Developer) => Developer) {}

// Developer => Developer에다가 Developer=>Developer를
// 할당하는 경우
tellme(function dToD(d: Developer): Developer {
  return new Developer();
});

// Developer => Developer 에다가 Person => Developer를
// 할당하는 경우
tellme(function pToD(d: Person): Developer {
  return new Developer();
});

// Developer => Developer 에다가 StartipDeveloper =>
// Developer를 할당하는 경우
// 에러 발생 => StartupDeveloper 타입의 매개변수는
// burning() 사용가능하지만
// 반환 되는 Developer에서는 사용이 불가능하다

// tellme(function sToD(d: StartupDeveloper): Developer {
//   return new Developer();
// });
