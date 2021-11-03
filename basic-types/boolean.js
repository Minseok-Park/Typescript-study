"use strict";
var isDone = false;
isDone = true;
console.log(typeof isDone); // 'boolean'
var isOk = true;
// new Boolean() 형태는 래퍼 개체를 생성할 때 사용
// 타입을 결정할 때는 무조건 소문자로 사용!
// let isNotOk: boolean = new Boolean(true);
