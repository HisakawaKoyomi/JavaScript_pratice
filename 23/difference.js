/*
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello () {
        return 'hello' + this.name
    }
    static isHuman () {
        return true;
    }
}*/

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    return 'hello' + this.name
};
Person.isHuman = function () {
    return true
};