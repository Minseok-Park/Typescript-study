"use strict";
// Symbol => 고유하고 수정 불가능한 값으로 만들어줌
// 접근을 제어하는데 쓰는 경우가 많다!
var _a;
console.log(Symbol("foo") === Symbol("foo"));
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
obj[sym];
console.log(obj[sym]);
