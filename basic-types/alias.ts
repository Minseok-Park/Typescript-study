// Aliasing Primitive
type MyStringType = string;
const str = "world";
let myStr: MyStringType = "hello";
myStr = str;

// Aliasing Union Type
let pe: string | number = 0;
pe = "Mark";
type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = "Anna";

// Aliasing Tuple
let pe2: [string, number] = ["Mark", 35];
type PersonTuple = [string, number];
let another2: PersonTuple = ["Anna", 24];

// Aliasing Function
type EatType = (food: string) => void;

function ea(food: string): void {}
