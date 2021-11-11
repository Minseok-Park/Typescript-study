"use strict";
class ClassName {
    constructor() { }
    static getInstance() {
        // ClassName 으로부터 만든 object가 있으면 그걸 return
        // 없으면, 만들어서 return
        if (ClassName.instance === null) {
            ClassName.instance = new ClassName();
        }
        return ClassName.instance;
    }
}
ClassName.instance = null;
const a1 = ClassName.getInstance();
const b1 = ClassName.getInstance();
console.log(a1 === b1);
