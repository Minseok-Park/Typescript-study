"use strict";
class Person1 {
    hello() {
        console.log("안녕하세요?", Person1.CITY);
    }
    change() {
        Person1.CITY = "LA";
    }
}
Person1.CITY = "Seoul";
const p11 = new Person1();
const p2 = new Person1();
p11.hello();
p11.change();
p2.hello();
