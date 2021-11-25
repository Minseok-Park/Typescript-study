"use strict";
var helloPerson = function (name) {
    console.log("\uC548\uB155\uD558\uC138\uC694! " + name + " \uC785\uB2C8\uB2E4.");
};
helloPerson("Mark", 39);
// type 체크는 helloPerson: HelloPerson 과
// helloPerons("MARK", 39)만 한다!
// 그러기 때문에 뒤에 실제로 구현된 function(name: string과
// 비교하는 것이 아니라 interface 타입과 비교해야함
