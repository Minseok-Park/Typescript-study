"use strict";
class Person {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        // readonly => 초기화 되는 영역에서만 값을 세팅 할 수 있음
        this.name = "Mark";
        this.country = "Korea";
        this.country = "Korea";
    }
}
const p1 = new Person("Mark", 39);
console.log(p1.name); // getter 로 구현
