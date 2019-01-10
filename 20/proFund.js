function A() {}
function B() {}
B.prototype = new A();
let b = new B();

console.log(
    b.hasOwnProperty('constructor'),
    b.__proto__ === B.prototype,
    b.__proto__.hasOwnProperty('constructor'),
    b.__proto__.__proto__ === A.prototype,
    b.__proto__.__proto__.hasOwnProperty('constructor'),
    A.prototype.constructor === A,
    b.__proto__.__proto__.constructor === b.constructor,
    b.constructor === A
);