let x: [string, number];

x = ["Hello", 39];

// 공간이 없기 때문에 오류 발생 => x[3] = "world";

const person: [string, number] = ["Mark", 39];

const [first, second] = person;
