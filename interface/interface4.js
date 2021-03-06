"use strict";
var p41 = {
    name: "Mark",
    age: 39,
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    },
};
var p42 = {
    name: "Mark",
    age: 39,
    //   hello(): void {
    //     console.log(`안녕하세요! ${this.name} 입니다.`);
    //   },
    // typescript에서는 이런식으로 사용 가능
    // constructor()에서는 this type 지정 불가능!
    hello: function () {
        console.log("\uC548\uB155\uD558\uC138\uC694! " + this.name + " \uC785\uB2C8\uB2E4.");
    },
};
// const p43: Person4 = {
//   name: "Mark",
//   age: 39,
//   hello: (): void => {
//     console.log(`안녕하세요! ${this.name} 입니다.`);
//   },
// };
p41.hello();
p42.hello();
