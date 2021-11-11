"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들...
function hello(message) {
    return message;
}
console.log(hello("Mark").length);
console.log(hello(39).length);
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric("Mark"));
console.log(helloGeneric(39));
console.log(helloGeneric(true));
