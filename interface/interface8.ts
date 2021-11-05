interface Person8 {
  name: string;
  age?: number;
  // 읽기 전용 => 바꿀수없음
  readonly gender: string;
}

const p81: Person8 = {
  name: "Mark",
  gender: "male",
};

p81.gender = "female";
