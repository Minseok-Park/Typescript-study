// let MyName: number = undefined;

//let u: undefined = null;
let v: void = undefined;

// tsconfig.json 파일에서 strict를 true로 설정해놨기 때문에
// string, number 등 기본 타입에 null, undefined를 넣을 수 없음.
// 초기값을 null로 하고 싶을 때는 union 타입을 사용
let union: string | null = null;
union = "Mark";
